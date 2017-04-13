import * as Models from './sequelize-models';

const GraphQlresolvers = {
    Query: {
        teams() {
            console.log('teams resolve run');
            return Models.Team.findAll({attributes: { exclude: ['updatedAt','createdAt'] } });
            //return connection.query("SELECT * FROM dbo.TeamDetails", { type: connection.QueryTypes.SELECT });
        },
        employeeByWinUser(_, args) {
            return Models.Headcount.findAll({ where: { WindowsUser: args.user }, attributes: { exclude: ['updatedAt','createdAt'] }, raw: true })
            .then(result=>{
                return result[0]; // must be done in this way for function that must return 1 object, because of MS SQL
            });
        },
        employees() {
            console.log('headcount resolve run');
            return Models.Headcount.findAll({ attributes: { exclude: ['updatedAt','createdAt'] } });
        },
        projectsForTeam(_, args) {
            return Models.Projects.findAll({ where: { OwnerTeam: args.OwnerName } });
        },
        searchForProject(_, args) {
            return Models.Projects.findAll({ where: { $or:[
                { ProjectName: 
                    { $like: '%' + args.keyWord + '%' } }, // search for Project Name
                { JobBookNo: 
                    { $like: '%' + args.keyWord + '%' } }, // search for Job Book Number
                { EventNo: 
                    { $like: '%' + args.keyWord + '%' } } // search for Event Number
            ] } });
        }
    }
}

export default GraphQlresolvers;