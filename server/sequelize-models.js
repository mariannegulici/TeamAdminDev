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

var ProjectTiming = conn.define('PrjTiming', {
    PrjTimingID: {
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
    Initial_StartJob: {
        type: Sequelize.DATE,
        field: 'Initial_StartJob'
    },
    Initial_SendMaterials: {
        type: Sequelize.DATE,
        field: 'Initial_SendMaterials'
    },
    Initial_KickOffMeeting: {
        type: Sequelize.DATE,
        field: 'Initial_KickOffMeeting'
    },
    Initial_StartProgramming: {
        type: Sequelize.DATE,
        field: 'Initial_StartProgramming'
    },
    Initial_QualityCheck: {
        type: Sequelize.DATE,
        field: 'Initial_QualityCheck'
    },
    Initial_LinkToClient: {
        type: Sequelize.DATE,
        field: 'Initial_LinkToClient'
    },
    Initial_LaunchField: {
        type: Sequelize.DATE,
        field: 'Initial_LaunchField'
    },
    Initial_CloseField: {
        type: Sequelize.DATE,
        field: 'Initial_CloseField'
    },
    Initial_EndJob: {
        type: Sequelize.DATE,
        field: 'Initial_EndJob'
    },
    Initial_StartDPDeliv: {
        type: Sequelize.DATE,
        field: 'Initial_StartDPDeliv'
    },
    Initial_EndDPDeliv: {
        type: Sequelize.DATE,
        field: 'Initial_EndDPDeliv'
    },
    Initial_EndJobDP: {
        type: Sequelize.DATE,
        field: 'Initial_EndJobDP'
    },
    Initial_StartCoding: {
        type: Sequelize.DATE,
        field: 'Initial_StartCoding'
    },
    Initial_EndCoding: {
        type: Sequelize.DATE,
        field: 'Initial_EndCoding'
    },
    Initial_StartJob_SendMat_Time: {
        type: Sequelize.INTEGER,
        field: 'Initial_StartJob_SendMat_Time'
    },
    Initial_SendMat_StartProg_Time: {
        type: Sequelize.INTEGER,
        field: 'Initial_StartProg_QualityCheck_Time'
    },
    Initial_QualityCheck_LinkToClient_Time: {
        type: Sequelize.INTEGER,
        field: 'Initial_QualityCheck_LinkToClient_Time'
    },
    Initial_LinkToClient_LaunchField_Time: {
        type: Sequelize.INTEGER,
        field: 'Initial_LinkToClient_LaunchField_Time'
    },
    Initial_LaunchField_CloseField_Time: {
        type: Sequelize.INTEGER,
        field: 'Initial_LaunchField_CloseField_Time'
    },
    Initial_CloseFiled_EndJob_Time: {
        type: Sequelize.INTEGER,
        field: 'Initial_CloseFiled_EndJob_Time'
    },
    Initial_StartDPDeliv_EndDPDeliv_Time: {
        type: Sequelize.INTEGER,
        field: 'Initial_StartDPDeliv_EndDPDeliv_Time'
    },
    Initial_EndDPDeliv_EndJobDP_Time: {
        type: Sequelize.INTEGER,
        field: 'Initial_EndDPDeliv_EndJobDP_Time'
    },
    Initial_StartCoding_EndCoding_Time: {
        type: Sequelize.INTEGER,
        field: 'Initial_StartCoding_EndCoding_Time'
    },
    Actual_StartJob: {
        type: Sequelize.DATE,
        field: 'Actual_StartJob'
    },
    Actual_SendMaterials: {
        type: Sequelize.DATE,
        field: 'Actual_SendMaterials'
    },
    Actual_KickOffMeeting: {
        type: Sequelize.DATE,
        field: 'Actual_KickOffMeeting'
    },
    Actual_StartProgramming: {
        type: Sequelize.DATE,
        field: 'Actual_StartProgramming'
    },
    Actual_QualityCheck: {
        type: Sequelize.DATE,
        field: 'Actual_QualityCheck'
    },
    Actual_LinkToClient: {
        type: Sequelize.DATE,
        field: 'Actual_LinkToClient'
    },
    Actual_LaunchField: {
        type: Sequelize.DATE,
        field: 'Actual_LaunchField'
    },
    Actual_CloseField: {
        type: Sequelize.DATE,
        field: 'Actual_CloseField'
    },
    Actual_EndJob: {
        type: Sequelize.DATE,
        field: 'Actual_EndJob'
    },
    Actual_StartDPDeliv: {
        type: Sequelize.DATE,
        field: 'Actual_StartDPDeliv'
    },
    Actual_EndDPDeliv: {
        type: Sequelize.DATE,
        field: 'Actual_EndDPDeliv'
    },
    Actual_EndJobDP: {
        type: Sequelize.DATE,
        field: 'Actual_EndJobDP'
    },
    Actual_StartCoding: {
        type: Sequelize.DATE,
        field: 'Actual_StartCoding'
    },
    Actual_EndCoding: {
        type: Sequelize.DATE,
        field: 'Actual_EndCoding'
    },
    Actual_StartJob_SendMat_Time: {
        type: Sequelize.INTEGER,
        field: 'Actual_StartJob_SendMat_Time'
    },
    Actual_SendMat_StartProg_Time: {
        type: Sequelize.INTEGER,
        field: 'Actual_SendMat_StartProg_Time'
    },
    Actual_StartProg_QualityCheck_Time: {
        type: Sequelize.INTEGER,
        field: 'Actual_StartProg_QualityCheck_Time'
    },
    Actual_QualityCheck_LinkToClient_Time: {
        type: Sequelize.INTEGER,
        field: 'Actual_QualityCheck_LinkToClient_Time'
    },
    Actual_LinkToClient_LaunchField_Time: {
        type: Sequelize.INTEGER,
        field: 'Actual_LinkToClient_LaunchField_Time'
    },
    Actual_LaunchField_CloseField_Time: {
        type: Sequelize.INTEGER,
        field: 'Actual_LaunchField_CloseField_Time'
    },
    Actual_CloseFiled_EndJob_Time: {
        type: Sequelize.INTEGER,
        field: 'Actual_CloseFiled_EndJob_Time'
    },
    Actual_StartDPDeliv_EndDPDeliv_Time: {
        type: Sequelize.INTEGER,
        field: 'Actual_StartDPDeliv_EndDPDeliv_Time'
    },
    Actual_EndDPDeliv_EndJobDP_Time: {
        type: Sequelize.INTEGER,
        field: 'Actual_EndDPDeliv_EndJobDP_Time'
    },
    Actual_StartCoding_EndCoding_Time: {
        type: Sequelize.INTEGER,
        field: 'Actual_StartCoding_EndCoding_Time'
    },
    JBClosureMonth: {
        type: Sequelize.INTEGER,
        field: 'JBClosureMonth'
    },
    JBClosureYear: {
        type: Sequelize.INTEGER,
        field: 'JBClosureYear'
    },
    Initial_BriefingMeeting: {
        type: Sequelize.DATE,
        field: 'Initial_BriefingMeeting'
    },
    Initial_ReportingMaterial: {
        type: Sequelize.DATE,
        field: 'Initial_ReportingMaterial'
    },
    Initial_ProgramReporting: {
        type: Sequelize.DATE,
        field: 'Initial_ProgramReporting'
    },
    Initial_DelivDraft: {
        type: Sequelize.DATE,
        field: 'Initial_DelivDraft'
    },
    Initial_ReportingChanges: {
        type: Sequelize.DATE,
        field: 'Initial_ReportingChanges'
    },
    Initial_FinalReport: {
        type: Sequelize.DATE,
        field: 'Initial_FinalReport'
    },
    Initial_BriefMeet_RepMat_Time: {
        type: Sequelize.INTEGER,
        field: 'Initial_BriefMeet_RepMat_Time'
    },
    Initial_RepMat_ProgRep_Time: {
        type: Sequelize.INTEGER,
        field: 'Initial_RepMat_ProgRep_Time'
    },
    Initial_ProgRep_DelivDraft_Time: {
        type: Sequelize.INTEGER,
        field: 'Initial_ProgRep_DelivDraft_Time'
    },
    Initial_DelivDraft_RepCh_Time: {
        type: Sequelize.INTEGER,
        field: 'Initial_DelivDraft_RepCh_Time'
    },
    Initial_RepCh_FinalRep_Time: {
        type: Sequelize.INTEGER,
        field: 'Initial_RepCh_FinalRep_Time'
    },
    Actual_BriefingMeeting: {
        type: Sequelize.DATE,
        field: 'Actual_BriefingMeeting'
    },
    Actual_ReportingMaterial: {
        type: Sequelize.DATE,
        field: 'Actual_ReportingMaterial'
    },
    Actual_ProgramReporting: {
        type: Sequelize.DATE,
        field: 'Actual_ProgramReporting'
    },
    Actual_DelivDraft: {
        type: Sequelize.DATE,
        field: 'Actual_DelivDraft'
    },
    Actual_ReportingChanges: {
        type: Sequelize.DATE,
        field: 'Actual_ReportingChanges'
    },
    Actual_FinalReport: {
        type: Sequelize.DATE,
        field: 'Actual_FinalReport'
    },
    Actual_BriefMeet_RepMat_Time: {
        type: Sequelize.INTEGER,
        field: 'Actual_BriefMeet_RepMat_Time'
    },
    Actual_RepMat_ProgRep_Time: {
        type: Sequelize.INTEGER,
        field: 'Actual_RepMat_ProgRep_Time'
    },
    Actual_ProgRep_DelivDraft_Time: {
        type: Sequelize.INTEGER,
        field: 'Actual_ProgRep_DelivDraft_Time'
    },
    Actual_DelivDraft_RepCh_Time: {
        type: Sequelize.INTEGER,
        field: 'Actual_DelivDraft_RepCh_Time'
    },
    Actual_RepCh_FinalRep_Time: {
        type: Sequelize.INTEGER,
        field: 'Actual_RepCh_FinalRep_Time'
    }
},
    {
        tableName: 'PrjTiming',
        timestamps: false
    }
);

var ProjectDiary = conn.define('Diary', {
    DiaryID: {
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
    SentMatIIS: {
        type: Sequelize.STRING,
        field: 'SentMatIIS'
    },
    KickOffCall: {
        type: Sequelize.STRING,
        field: 'KickOffCall'
    },
    Err_fromQuire: {
        type: Sequelize.STRING,
        field: 'Err_fromQuire'
    },
    DelaySendingLinkPM: {
        type: Sequelize.STRING,
        field: 'DelaySendingLinkPM'
    },
    Err_foundPM: {
        type: Sequelize.STRING,
        field: 'Err_foundPM'
    },
    Err_foundQA: {
        type: Sequelize.STRING,
        field: 'Err_foundQA'
    },
    DelaySendingLinkRE: {
        type: Sequelize.STRING,
        field: 'DelaySendingLinkRE'
    },
    Err_foundRE: {
        type: Sequelize.STRING,
        field: 'Err_foundRE'
    },
    ChangesClient: {
        type: Sequelize.STRING,
        field: 'ChangesClient'
    },
    FieldReportSent: {
        type: Sequelize.STRING,
        field: 'FieldReportSent'
    },
    IncidenceSent: {
        type: Sequelize.STRING,
        field: 'IncidenceSent'
    },
    FielClosedOnTime: {
        type: Sequelize.STRING,
        field: 'FielClosedOnTime'
    },
    Err_fromDO: {
        type: Sequelize.STRING,
        field: 'Err_fromDO'
    },
    OTIFExpected: {
        type: Sequelize.STRING,
        field: 'OTIFExpected'
    },
    OTIFAgreed: {
        type: Sequelize.STRING,
        field: 'OTIFAgreed'
    },
    OTIFFollowUp: {
        type: Sequelize.STRING,
        field: 'OTIFFollowUp'
    },
    GMHoldEstim: {
        type: Sequelize.STRING,
        field: 'GMHoldEstim'
    },
    GMHoldEstimOE: {
        type: Sequelize.STRING,
        field: 'GMHoldEstimOE'
    },
    LaunchDateAchieved: {
        type: Sequelize.STRING,
        field: 'LaunchDateAchieved'
    },
    QuotasMet: {
        type: Sequelize.STRING,
        field: 'QuotasMet'
    },
    NoScriptingErrPostLaunch: {
        type: Sequelize.STRING,
        field: 'NoScriptingErrPostLaunch'
    },
    NoSamplingErrPostLaunch: {
        type: Sequelize.STRING,
        field: 'NoSamplingErrPostLaunch'
    },
    GoodPrjMng: {
        type: Sequelize.STRING,
        field: 'GoodPrjMng'
    },
    GeneralComm: {
        type: Sequelize.STRING,
        field: 'GeneralComm'
    },
    GeneralFeedback: {
        type: Sequelize.STRING,
        field: 'GeneralFeedback'
    },
    panel1: {
        type: Sequelize.STRING,
        field: 'panel1'
    },
    panel1_OnTime: {
        type: Sequelize.STRING,
        field: 'panel1_OnTime'
    },
    panel1_AsPerBid: {
        type: Sequelize.STRING,
        field: 'panel1_AsPerBid'
    },
    panel1_Responsiveness: {
        type: Sequelize.STRING,
        field: 'panel1_Responsiveness'
    },
    panel1_QuickLaunch: {
        type: Sequelize.STRING,
        field: 'panel1_QuickLaunch'
    },
    panel2: {
        type: Sequelize.STRING,
        field: 'panel2'
    },
    panel2_OnTime: {
        type: Sequelize.STRING,
        field: 'panel2_OnTime'
    },
    panel2_AsPerBid: {
        type: Sequelize.STRING,
        field: 'panel2_AsPerBid'
    },
    panel2_Responsiveness: {
        type: Sequelize.STRING,
        field: 'panel2_Responsiveness'
    },
    panel2_QuickLaunch: {
        type: Sequelize.STRING,
        field: 'panel2_QuickLaunch'
    },
    panel3: {
        type: Sequelize.STRING,
        field: 'panel3'
    },
    panel3_OnTime: {
        type: Sequelize.STRING,
        field: 'panel3_OnTime'
    },
    panel3_AsPerBid: {
        type: Sequelize.STRING,
        field: 'panel3_AsPerBid'
    },
    panel3_Responsiveness: {
        type: Sequelize.STRING,
        field: 'panel3_Responsiveness'
    },
    panel3_QuickLaunch: {
        type: Sequelize.STRING,
        field: 'panel3_QuickLaunch'
    },
    panel4: {
        type: Sequelize.STRING,
        field: 'panel4'
    },
    panel4_OnTime: {
        type: Sequelize.STRING,
        field: 'panel4_OnTime'
    },
    panel4_AsPerBid: {
        type: Sequelize.STRING,
        field: 'panel4_AsPerBid'
    },
    panel4_Responsiveness: {
        type: Sequelize.STRING,
        field: 'panel4_Responsiveness'
    },
    panel4_QuickLaunch: {
        type: Sequelize.STRING,
        field: 'panel4_QuickLaunch'
    },
    panel5: {
        type: Sequelize.STRING,
        field: 'panel5'
    },
    panel5_OnTime: {
        type: Sequelize.STRING,
        field: 'panel5_OnTime'
    },
    panel5_AsPerBid: {
        type: Sequelize.STRING,
        field: 'panel5_AsPerBid'
    },
    panel5_Responsiveness: {
        type: Sequelize.STRING,
        field: 'panel5_Responsiveness'
    },
    panel5_QuickLaunch: {
        type: Sequelize.STRING,
        field: 'panel5_QuickLaunch'
    },
    Diary_Custom_field1_label: {
        type: Sequelize.STRING,
        field: 'Diary_Custom_field1_label'
    },
    Diary_Custom_field1_value: {
        type: Sequelize.STRING,
        field: 'Diary_Custom_field1_value'
    },
    Diary_Custom_field2_label: {
        type: Sequelize.STRING,
        field: 'Diary_Custom_field2_label'
    },
    Diary_Custom_field2_value: {
        type: Sequelize.STRING,
        field: 'Diary_Custom_field2_value'
    },
    Diary_Custom_field3_label: {
        type: Sequelize.STRING,
        field: 'Diary_Custom_field3_label'
    },
    Diary_Custom_field3_value: {
        type: Sequelize.STRING,
        field: 'Diary_Custom_field3_value'
    },
    Diary_Custom_field4_label: {
        type: Sequelize.STRING,
        field: 'Diary_Custom_field4_label'
    },
    Diary_Custom_field4_value: {
        type: Sequelize.STRING,
        field: 'Diary_Custom_field4_value'
    },
    Diary_Custom_field5_label: {
        type: Sequelize.STRING,
        field: 'Diary_Custom_field5_label'
    },
    Diary_Custom_field5_value: {
        type: Sequelize.STRING,
        field: 'Diary_Custom_field5_value'
    },
    IncompleteFields: {
        type: Sequelize.STRING,
        field: 'IncompleteFields'
    },
    DuringRound0Changes: {
        type: Sequelize.STRING,
        field: 'DuringRound0Changes'
    },
    AfterRound0Changes: {
        type: Sequelize.STRING,
        field: 'AfterRound0Changes'
    },
    Total_Corrections: {
        type: Sequelize.STRING,
        field: 'Total_Corrections'
    },
    Total_Logic_Corrections: {
        type: Sequelize.STRING,
        field: 'Total_Logic_Corrections'
    },
    Total_Text_Corrections: {
        type: Sequelize.STRING,
        field: 'Total_Text_Corrections'
    },
    Total_Look_Feel_Corrections: {
        type: Sequelize.STRING,
        field: 'Total_Look_Feel_Corrections'
    },
    Total_Translations_Corrections: {
        type: Sequelize.STRING,
        field: 'Total_Translations_Corrections'
    },
    Total_Other_Corrections: {
        type: Sequelize.STRING,
        field: 'Total_Other_Corrections'
    },
    PM_Logic_Corrections: {
        type: Sequelize.STRING,
        field: 'PM_Logic_Corrections'
    },
    PM_Text_Corrections: {
        type: Sequelize.STRING,
        field: 'PM_Text_Corrections'
    },
    PM_Look_Feel_Corrections: {
        type: Sequelize.STRING,
        field: 'PM_Look_Feel_Corrections'
    },
    PM_PM_Corrections: {
        type: Sequelize.STRING,
        field: 'PM_PM_Corrections'
    },
    PM_Other_Corrections: {
        type: Sequelize.STRING,
        field: 'PM_Other_Corrections'
    },
    CS_Logic_Corrections: {
        type: Sequelize.STRING,
        field: 'CS_Logic_Corrections'
    },
    CS_Text_Corrections: {
        type: Sequelize.STRING,
        field: 'CS_Text_Corrections'
    },
    CS_Look_Feel_Corrections: {
        type: Sequelize.STRING,
        field: 'CS_Look_Feel_Corrections'
    },
    CS_Translations_Corrections: {
        type: Sequelize.STRING,
        field: 'CS_Translations_Corrections'
    },
    CS_Other_Corrections: {
        type: Sequelize.STRING,
        field: 'CS_Other_Corrections'
    },
    QA_Logic_Corrections: {
        type: Sequelize.STRING,
        field: 'QA_Logic_Corrections'
    },
    QA_Text_Corrections: {
        type: Sequelize.STRING,
        field: 'QA_Text_Corrections'
    },
    QA_Look_Feel_Corrections: {
        type: Sequelize.STRING,
        field: 'QA_Look_Feel_Corrections'
    },
    QA_Translations_Corrections: {
        type: Sequelize.STRING,
        field: 'QA_Translations_Corrections'
    },
    QA_Other_Corrections: {
        type: Sequelize.STRING,
        field: 'QA_Other_Corrections'
    },
    Other_Corrections: {
        type: Sequelize.STRING,
        field: 'Other_Corrections'
    },
    Other_Logic_Corrections: {
        type: Sequelize.STRING,
        field: 'Other_Logic_Corrections'
    },
    Other_Text_Corrections: {
        type: Sequelize.STRING,
        field: 'Other_Text_Corrections'
    },
    Other_Look_Feel_Corrections: {
        type: Sequelize.STRING,
        field: 'Other_Look_Feel_Corrections'
    },
    Other_Translations_Corrections: {
        type: Sequelize.STRING,
        field: 'Other_Translations_Corrections'
    },
    Other_Other_Corrections: {
        type: Sequelize.STRING,
        field: 'Other_Other_Corrections'
    },
    Round_0_Changes: {
        type: Sequelize.STRING,
        field: 'Round_0_Changes'
    },
    RECODE_Round0Changes: {
        type: Sequelize.STRING,
        field: 'RECODE_Round0Changes'
    },
    Round_1_Changes: {
        type: Sequelize.STRING,
        field: 'Round_1_Changes'
    },
    Round_2_Changes: {
        type: Sequelize.STRING,
        field: 'Round_2_Changes'
    },
    Round_3_Changes: {
        type: Sequelize.STRING,
        field: 'Round_3_Changes'
    },
    Round_4_Changes: {
        type: Sequelize.STRING,
        field: 'Round_4_Changes'
    },
    Round_5_Changes: {
        type: Sequelize.STRING,
        field: 'Round_5_Changes'
    },
    Round_6_Changes: {
        type: Sequelize.STRING,
        field: 'Round_6_Changes'
    },
    Round_7_Changes: {
        type: Sequelize.STRING,
        field: 'Round_7_Changes'
    },
    Round_8_Changes: {
        type: Sequelize.STRING,
        field: 'Round_8_Changes'
    },
    Round_9_Changes: {
        type: Sequelize.STRING,
        field: 'Round_9_Changes'
    },
    Round_10_Changes: {
        type: Sequelize.STRING,
        field: 'Round_10_Changes'
    },
    RECODE_Round1to10Changes: {
        type: Sequelize.STRING,
        field: 'RECODE_Round1to10Changes'
    },
    LT_Corrections: {
        type: Sequelize.STRING,
        field: 'LT_Corrections'
    },
    Timing_Versions: {
        type: Sequelize.STRING,
        field: 'Timing_Versions'
    }
},
    {
        tableName: 'Diary',
        timestamps: false
    }
);

ProjectTeam.belongsTo(Projects, {foreignKey: 'ProjectID'});
ProjectTiming.belongsTo(Projects, {foreignKey: 'ProjectID'});
Projects.hasOne(ProjectTiming, {foreignKey: 'ProjectID'})
Projects.hasOne(ProjectTeam, {foreignKey: 'ProjectID'})
ProjectDiary.belongsTo(Projects, {foreignKey: 'ProjectID'});

export { Team, Headcount, Projects, ProjectTeam, ProjectTiming, ProjectDiary };