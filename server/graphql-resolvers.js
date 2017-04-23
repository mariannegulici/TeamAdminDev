import * as Models from './sequelize-models';
import extractQueryColumns from './server-utilities';

const GraphQlresolvers = {
    Query: {
        teams(obj, args, context, info) {
            return Models.Team.findAll();
        },
        employeeByWinUser(obj, args, context, info) {
            return Models.Headcount.findAll({ attributes: extractQueryColumns(info), where: { WindowsUser: args.user }, raw: true })
            .then(result=>{
                return result[0]; // must be done in this way for function that must return 1 object, because of MS SQL
            });
        },
        employees(obj, args, context, info) {
            return Models.Headcount.findAll();
        },
        projectsForTeam(obj, args, context, info) {
            return Models.Projects.findAll({ where: { OwnerTeam: args.OwnerName } });
        },
        searchForProject(obj, args, context, info) {
            console.log(Date.now());
            return Models.Projects.findAll({ attributes: extractQueryColumns(info), where: { $or:[
                { ProjectName: 
                    { $like: '%' + args.keyWord + '%' } }, // search for Project Name
                { JobBookNo: 
                    { $like: '%' + args.keyWord + '%' } }, // search for Job Book Number
                { EventNo: 
                    { $like: '%' + args.keyWord + '%' } } // search for Event Number
            ] }, raw: true });
        }
    },
    Project: {
        TeamInfo(Project, args, context, info) {
            return context.projectTeam.getTeamInfo(Project.ProjectID, info);
        }
    }
}

export default GraphQlresolvers;