import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './graphql-resolvers';

const schema = `
    type Team {
        TeamDetailsID: Int!
        TeamName: String
        TeamRole: String
        TeamWSBL: String
        TeamRegion: String
    }

    type Headcount {
        HeadcountID: Int!
        LastAction: String
        LastActionDoer: String
        LastActionTime: String
        Dropped: Int
        UserName: String
        WindowsUser: String
        Email: String
        SeniorityLevel: String
        Team: String
        Role: String
        ManagerID: Int
        StatusActiv: String
        HiringDate: String
        ReadyForProdDate: String
        LeavingDate: String
        OrgTeam: String
        WorkingHours: String
        OrgDepartment: String
        Region: String
        LocationCity: String
        LocationCountry: String
    }

    type Project {
        ProjectID: Int!
        LastAction: String
        LastActionDoer: String
        LastActionTime: String
        Dropped: Int
        OwnerTeam: String
        ExOwnerTeam: String
        LeadRec: String
        DiaryOrNot: String
        ProjectName: String
        ProjectStatus: String
        JobBookNo: String
        JobBookNoSecond: String
        EventNo: String
        ProjectFolder: String
        ProjectType: String
        FieldCountry: String
        NoLinks: String
        CopiedLinks: String
        InitialLOI: String
        Client: String
        ClientCountry: String
        TemplateUsed: String
        NotTheLatestTemplate: String
        DeviceAgnostic: String
        Cortex: String
        Reallocation: String
        DPDelivDetails: String
        InfoComments: String
        ProductOffering: String
        JobBookCoding: String
        TeamInfo: ProjectTeam
    }

    type ProjectTeam {
        PrjTeamID: Int!
        ProjectID: Int!
        LastAction: String
        LastActionDoer: String
        LastActionTime: String
        Dropped: Int
        PM: String
        PMTeam: String
        PMSecond: String
        PMSecondTeam: String
        SW: String
        SWTeam: String
        SWSecond: String
        SWSecondTeam: String
        QA: String
        QATeam: String
        QASecond: String
        QASecondTeam: String
        DP: String
        DPTeam: String
        DPSecond: String
        DPSecondTeam: String
        QE: String
        QETeam: String
        MP: String
        MPTeam: String
        CO: String
        COTeam: String
        DO: String
        DOTeam: String
        FC: String
        FCTeam: String
        ExtSW: String
        ExtSWTeam: String
        ExtQA: String
        ExtQATeam: String
        ExtDP: String
        ExtDPTeam: String
        REP: String
        REPTeam: String
        REPSecond: String
        REPSecondTeam: String
        REPQA: String
        REPQATeam: String
        ExtREP: String
        ExtREPTeam: String
        FCSecond: String
        FCSecondTeam: String
    }

    type Query {
        teams: [Team]
        employeeByWinUser(user: String): Headcount
        employees: [Headcount]
        projectsForTeam(OwnerName: String): [Project]
        searchForProject(keyWord: String!): [Project]
    }
`;

export default makeExecutableSchema({
    typeDefs: schema,
    resolvers
});