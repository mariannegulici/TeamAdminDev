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
        },
        projectByID(obj, args, context, info) {
            console.log(Date.now());
            return Models.Projects.findAll({ attributes: extractQueryColumns(info), where: { ProjectID: args.ID }, raw: true })
            .then(result=>{
                return result[0]; // must be done in this way for function that must return 1 object, because of MS SQL
            });
        },
        getProjectDiary(obj, args, context, info) {
            return Models.Projects.findAll({ attributes: ['ProjectID'], include: [{
                model: Models.ProjectTiming,
                where: {
                            Actual_CloseField: {
                                $gte: '2016-12-01 00:00:00',
                                $lte: '2016-12-31 23:59:59'
                            }
                        }
                },
                {
                    model: Models.ProjectTeam,
                    where: {
                            SWTeam: 'ASI NA SW Adhoc'
                        }
                }
            ], raw: true, includeIgnoreAttributes: false });
        }
    },
    Project: {
        TeamInfo(Project, args, context, info) {
            return context.projectTeam.getTeamInfo(Project.ProjectID, info, 1);
        },
        TimingInfo(Project, args, context, info) {
            return context.projectTiming.getTimingInfo(Project.ProjectID, info, 2);
        },
        DiaryInfo(Project, args, context, info) {
            return context.projectDiary.getDiaryInfo(Project.ProjectID, info, 3);
        }
    },
    ProjectTeam: {

    },
    ProjectTiming: {
        /*DiaryInfo(Project, args, context, info) {
            console.log(Project);
            /*return Models.Projects.findAll({ where: { OwnerTeam: args.OwnerName } })
            .then(result=>{
                return result[0]; // must be done in this way for function that must return 1 object, because of MS SQL
            });
        }*/
    }
}

export default GraphQlresolvers;