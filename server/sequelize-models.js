import conn from './sequelize-service';
import Sequelize from 'sequelize';

var Team = conn.define('TeamDetails', {
    TeamDetailsID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    TeamName: {
        type: Sequelize.STRING,
        field: 'TeamName'
    },
    TeamRole: {
        type: Sequelize.STRING,
        field: 'TeamRole'
    },
    TeamWSBL: {
        type: Sequelize.STRING,
        field: 'TeamWSBL'
    },
    TeamRegion: {
        type: Sequelize.STRING,
        field: 'TeamRegion'
    }
},
    {
        tableName: 'TeamDetails',
        timestamps: false
    }
);

var Headcount = conn.define('Headcount', {
    HeadcountID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    LastAction: {
        type: Sequelize.STRING,
        field: 'LastAction'
    },
    LastActionDoer: {
        type: Sequelize.STRING,
        field: 'LastActionDoer'
    },
    LastActionTime: {
        type: Sequelize.DATE,
        field: 'LastActionTime'
    },
    Dropped: {
        type: Sequelize.INTEGER,
        field: 'Dropped'
    },
    UserName: {
        type: Sequelize.STRING,
        field: 'UserName'
    },
    WindowsUser: {
        type: Sequelize.STRING,
        field: 'WindowsUser'
    },
    Email: {
        type: Sequelize.STRING,
        field: 'Email'
    },
    SeniorityLevel: {
        type: Sequelize.STRING,
        field: 'SeniorityLevel'
    },
    Team: {
        type: Sequelize.STRING,
        field: 'Team'
    },
    Role: {
        type: Sequelize.STRING,
        field: 'Role'
    },
    ManagerID: {
        type: Sequelize.INTEGER,
        field: 'ManagerID'
    },
    StatusActiv: {
        type: Sequelize.STRING,
        field: 'StatusActiv'
    },
    HiringDate: {
        type: Sequelize.DATE,
        field: 'HiringDate'
    },
    ReadyForProdDate: {
        type: Sequelize.DATE,
        field: 'ReadyForProdDate'
    },
    LeavingDate: {
        type: Sequelize.DATE,
        field: 'LeavingDate'
    },
    OrgTeam: {
        type: Sequelize.STRING,
        field: 'OrgTeam'
    },
    WorkingHours: {
        type: Sequelize.STRING,
        field: 'WorkingHours'
    },
    OrgDepartment: {
        type: Sequelize.STRING,
        field: 'OrgDepartment'
    },
    Region: {
        type: Sequelize.STRING,
        field: 'Region'
    },
    LocationCity: {
        type: Sequelize.STRING,
        field: 'LocationCity'
    },
    LocationCountry: {
        type: Sequelize.STRING,
        field: 'LocationCountry'
    }
},
    {
        tableName: 'Headcount',
        timestamps: false
    }
);

var Projects = conn.define('Projects', {
    ProjectID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    LastAction: {
        type: Sequelize.STRING,
        field: 'LastAction'
    },
    LastActionDoer: {
        type: Sequelize.STRING,
        field: 'LastActionDoer'
    },
    LastActionTime: {
        type: Sequelize.DATE,
        field: 'LastActionTime'
    },
    Dropped: {
        type: Sequelize.INTEGER,
        field: 'Dropped'
    },
    OwnerTeam: {
        type: Sequelize.STRING,
        field: 'OwnerTeam'
    },
    ExOwnerTeam: {
        type: Sequelize.STRING,
        field: 'ExOwnerTeam'
    },
    LeadRec: {
        type: Sequelize.STRING,
        field: 'LeadRec'
    },
    DiaryOrNot: {
        type: Sequelize.STRING,
        field: 'DiaryOrNot'
    },
    ProjectName: {
        type: Sequelize.STRING,
        field: 'ProjectName'
    },
    ProjectStatus: {
        type: Sequelize.STRING,
        field: 'ProjectStatus'
    },
    JobBookNo: {
        type: Sequelize.STRING,
        field: 'JobBookNo'
    },
    JobBookNoSecond: {
        type: Sequelize.STRING,
        field: 'JobBookNoSecond'
    },
    EventNo: {
        type: Sequelize.STRING,
        field: 'EventNo'
    },
    ProjectFolder: {
        type: Sequelize.STRING,
        field: 'ProjectFolder'
    },
    ProjectType: {
        type: Sequelize.STRING,
        field: 'ProjectType'
    },
    FieldCountry: {
        type: Sequelize.STRING,
        field: 'FieldCountry'
    },
    NoLinks: {
        type: Sequelize.STRING,
        field: 'NoLinks'
    },
    CopiedLink: {
        type: Sequelize.STRING,
        field: 'CopiedLink'
    },
    InitialLOI: {
        type: Sequelize.STRING,
        field: 'InitialLOI'
    },
    Client: {
        type: Sequelize.STRING,
        field: 'Client'
    },
    ClientCountry: {
        type: Sequelize.STRING,
        field: 'ClientCountry'
    },
    TemplateUsed: {
        type: Sequelize.STRING,
        field: 'TemplateUsed'
    },
    NotTheLatestTemplate: {
        type: Sequelize.STRING,
        field: 'NotTheLatestTemplate'
    },
    DeviceAgnostic: {
        type: Sequelize.STRING,
        field: 'DeviceAgnostic'
    },
    Cortex: {
        type: Sequelize.STRING,
        field: 'Cortex'
    },
    Reallocation: {
        type: Sequelize.STRING,
        field: 'Reallocation'
    },
    DPDelivDetails: {
        type: Sequelize.STRING,
        field: 'DPDelivDetails'
    },
    InfoComments: {
        type: Sequelize.STRING,
        field: 'InfoComments'
    },
    ProductOffering: {
        type: Sequelize.STRING,
        field: 'ProductOffering'
    },
    JobBookCoding: {
        type: Sequelize.STRING,
        field: 'JobBookCoding'
    }
},
    {
        tableName: 'Projects',
        timestamps: false
    }
);

var ProjectTeam = conn.define('PrjTeam', {
    PrjTeamID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ProjectID: {
        type: Sequelize.INTEGER,
        field: 'ProjectID'
    },
    LastAction: {
        type: Sequelize.STRING,
        field: 'LastAction'
    },
    LastActionDoer: {
        type: Sequelize.STRING,
        field: 'LastActionDoer'
    },
    LastActionTime: {
        type: Sequelize.DATE,
        field: 'LastActionTime'
    },
    Dropped: {
        type: Sequelize.INTEGER,
        field: 'Dropped'
    },
    PM: {
        type: Sequelize.STRING,
        field: 'PM'
    },
    PMTeam: {
        type: Sequelize.STRING,
        field: 'PMTeam'
    },
    PMSecond: {
        type: Sequelize.STRING,
        field: 'PMSecond'
    },
    PMSecondTeam: {
        type: Sequelize.STRING,
        field: 'PMSecondTeam'
    },
    SW: {
        type: Sequelize.STRING,
        field: 'SW'
    },
    SWTeam: {
        type: Sequelize.STRING,
        field: 'SWTeam'
    },
    SWSecond: {
        type: Sequelize.STRING,
        field: 'SWSecond'
    },
    SWSecondTeam: {
        type: Sequelize.STRING,
        field: 'SWSecondTeam'
    },
    QA: {
        type: Sequelize.STRING,
        field: 'QA'
    },
    QATeam: {
        type: Sequelize.STRING,
        field: 'QATeam'
    },
    QASecond: {
        type: Sequelize.STRING,
        field: 'QASecond'
    },
    QASecondTeam: {
        type: Sequelize.STRING,
        field: 'QASecondTeam'
    },
    DP: {
        type: Sequelize.STRING,
        field: 'DP'
    },
    DPTeam: {
        type: Sequelize.STRING,
        field: 'DPTeam'
    },
    DPSecond: {
        type: Sequelize.STRING,
        field: 'DPSecond'
    },
    DPSecondTeam: {
        type: Sequelize.STRING,
        field: 'DPSecondTeam'
    },
    QE: {
        type: Sequelize.STRING,
        field: 'QE'
    },
    QETeam: {
        type: Sequelize.STRING,
        field: 'QETeam'
    },
    MP: {
        type: Sequelize.STRING,
        field: 'MP'
    },
    MPTeam: {
        type: Sequelize.STRING,
        field: 'MPTeam'
    },
    CO: {
        type: Sequelize.STRING,
        field: 'CO'
    },
    COTeam: {
        type: Sequelize.STRING,
        field: 'COTeam'
    },
    DO: {
        type: Sequelize.STRING,
        field: 'DO'
    },
    DOTeam: {
        type: Sequelize.STRING,
        field: 'DOTeam'
    },
    FC: {
        type: Sequelize.STRING,
        field: 'FC'
    },
    FCTeam: {
        type: Sequelize.STRING,
        field: 'FCTeam'
    },
    ExtSW: {
        type: Sequelize.STRING,
        field: 'ExtSW'
    },
    ExtSWTeam: {
        type: Sequelize.STRING,
        field: 'ExtSWTeam'
    },
    ExtQA: {
        type: Sequelize.STRING,
        field: 'ExtQA'
    },
    ExtQATeam: {
        type: Sequelize.STRING,
        field: 'ExtQATeam'
    },
    ExtDP: {
        type: Sequelize.STRING,
        field: 'ExtDP'
    },
    ExtDPTeam: {
        type: Sequelize.STRING,
        field: 'ExtDPTeam'
    },
    REP: {
        type: Sequelize.STRING,
        field: 'REP'
    },
    REPTeam: {
        type: Sequelize.STRING,
        field: 'REPTeam'
    },
    REPSecond: {
        type: Sequelize.STRING,
        field: 'REPSecond'
    },
    REPSecondTeam: {
        type: Sequelize.STRING,
        field: 'REPSecondTeam'
    },
    REPQA: {
        type: Sequelize.STRING,
        field: 'REPQA'
    },
    REPQATeam: {
        type: Sequelize.STRING,
        field: 'REPQATeam'
    },
    ExtREP: {
        type: Sequelize.STRING,
        field: 'ExtREP'
    },
    ExtREPTeam: {
        type: Sequelize.STRING,
        field: 'ExtREPTeam'
    },
    FCSecond: {
        type: Sequelize.STRING,
        field: 'FCSecond'
    },
    FCSecondTeam: {
        type: Sequelize.STRING,
        field: 'FCSecondTeam'
    }
},
    {
        tableName: 'PrjTeam',
        timestamps: false
    }
);

ProjectTeam.belongsTo(Projects, {foreignKey: 'ProjectID'});

export { Team, Headcount, Projects, ProjectTeam };