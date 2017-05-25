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
        TimingInfo: ProjectTiming
        DiaryInfo: ProjectDiary
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
        ProjectInfo: Project
    }

    type ProjectTiming {
        PrjTimingID: Int!
        ProjectID: Int!
        LastAction: String
        LastActionDoer: String
        LastActionTime: String
        Dropped: Int
        Initial_StartJob: String
        Initial_SendMaterials: String
        Initial_KickOffMeeting: String
        Initial_StartProgramming: String
        Initial_QualityCheck: String
        Initial_LinkToClient: String
        Initial_LaunchField: String
        Initial_CloseField: String
        Initial_EndJob: String
        Initial_StartDPDeliv: String
        Initial_EndDPDeliv: String
        Initial_EndJobDP: String
        Initial_StartCoding: String
        Initial_EndCoding: String
        Initial_StartJob_SendMat_Time: Int
        Initial_SendMat_StartProg_Time: Int
        Initial_StartProg_QualityCheck_Time: Int
        Initial_QualityCheck_LinkToClient_Time: Int
        Initial_LinkToClient_LaunchField_Time: Int
        Initial_LaunchField_CloseField_Time: Int
        Initial_CloseFiled_EndJob_Time: Int
        Initial_StartDPDeliv_EndDPDeliv_Time: Int
        Initial_EndDPDeliv_EndJobDP_Time: Int
        Initial_StartCoding_EndCoding_Time: Int
        Actual_StartJob: String
        Actual_SendMaterials: String
        Actual_KickOffMeeting: String
        Actual_StartProgramming: String
        Actual_QualityCheck: String
        Actual_LinkToClient: String
        Actual_LaunchField: String
        Actual_CloseField: String
        Actual_EndJob: String
        Actual_StartDPDeliv: String
        Actual_EndDPDeliv: String
        Actual_EndJobDP: String
        Actual_StartCoding: String
        Actual_EndCoding: String
        Actual_StartJob_SendMat_Time: Int
        Actual_SendMat_StartProg_Time: Int
        Actual_StartProg_QualityCheck_Time: Int
        Actual_QualityCheck_LinkToClient_Time: Int
        Actual_LinkToClient_LaunchField_Time: Int
        Actual_LaunchField_CloseField_Time: Int
        Actual_CloseFiled_EndJob_Time: Int
        Actual_StartDPDeliv_EndDPDeliv_Time: Int
        Actual_EndDPDeliv_EndJobDP_Time: Int
        Actual_StartCoding_EndCoding_Time: Int
        JBClosureMonth: Int
        JBClosureYear: Int
        Initial_BriefingMeeting: String
        Initial_ReportingMaterial: String
        Initial_ProgramReporting: String
        Initial_DelivDraft: String
        Initial_ReportingChanges: String
        Initial_FinalReport: String
        Initial_BriefMeet_RepMat_Time: Int
        Initial_RepMat_ProgRep_Time: Int
        Initial_ProgRep_DelivDraft_Time: Int
        Initial_DelivDraft_RepCh_Time: Int
        Initial_RepCh_FinalRep_Time: Int
        Actual_BriefingMeeting: String
        Actual_ReportingMaterial: String
        Actual_ProgramReporting: String
        Actual_DelivDraft: String
        Actual_ReportingChanges: String
        Actual_FinalReport: String
        Actual_BriefMeet_RepMat_Time: Int
        Actual_RepMat_ProgRep_Time: Int
        Actual_ProgRep_DelivDraft_Time: Int
        Actual_DelivDraft_RepCh_Time: Int
        Actual_RepCh_FinalRep_Time: Int
    }

    type ProjectDiary {
        PrjTimingID: Int!
        ProjectID: Int!
        LastAction: String
        LastActionDoer: String
        LastActionTime: String
        Dropped: Int
        SentMatIIS: String
        KickOffCall: String
        Err_fromQuire: String
        DelaySendingLinkPM: String
        Err_foundPM: String
        Err_foundQA: String
        DelaySendingLinkRE: String
        Err_foundRE: String
        ChangesClient: String
        FieldReportSent: String
        IncidenceSent: String
        FieldClosedOnTime: String
        Err_fromDO: String
        OTIFExpected: String
        OTIFAgreed: String
        OTIFFollowUp: String
        GMHoldEstim: String
        GMHoldEstimOE: String
        LaunchDateAchieved: String
        QuotasMet: String
        NoScriptingErrPostLaunch: String
        NoSamplingErrPostLaunch: String
        GoodPrjMng: String
        GeneralComm: String
        GeneralFeedback: String
        panel1: String
        panel1_OnTime: String
        panel1_AsPerBid: String
        panel1_Responsiveness: String
        panel1_QuickLaunch: String
        panel2: String
        panel2_OnTime: String
        panel2_AsPerBid: String
        panel2_Responsiveness: String
        panel2_QuickLaunch: String
        panel3: String
        panel3_OnTime: String
        panel3_AsPerBid: String
        panel3_Responsiveness: String
        panel3_QuickLaunch: String
        panel4: String
        panel4_OnTime: String
        panel4_AsPerBid: String
        panel4_Responsiveness: String
        panel4_QuickLaunch: String
        panel5: String
        panel5_OnTime: String
        panel5_AsPerBid: String
        panel5_Responsiveness: String
        panel5_QuickLaunch: String
        Diary_Custom_field1_label: String
        Diary_Custom_field1_value: String
        Diary_Custom_field2_label: String
        Diary_Custom_field2_value: String
        Diary_Custom_field3_label: String
        Diary_Custom_field3_value: String
        Diary_Custom_field4_label: String
        Diary_Custom_field4_value: String
        Diary_Custom_field5_label: String
        Diary_Custom_field5_value: String
        IncompleteFields: String
        DuringRound0Changes: String
        AfterRound0Changes: String
        Total_Corrections: String
        Total_Logic_Corrections: String
        Total_Text_Corrections: String
        Total_Look_Feel_Corrections: String
        Total_Translations_Corrections: String
        Total_Other_Corrections: String
        PM_Logic_Corrections: String
        PM_Text_Corrections: String
        PM_Look_Feel_Corrections: String
        PM_PM_Corrections: String
        PM_Other_Corrections: String
        CS_Logic_Corrections: String
        CS_Text_Corrections: String
        CS_Look_Feel_Corrections: String
        CS_Translations_Corrections: String
        CS_Other_Corrections: String
        QA_Logic_Corrections: String
        QA_Text_Corrections: String
        QA_Look_Feel_Corrections: String
        QA_Translations_Corrections: String
        QA_Other_Corrections: String
        Other_Corrections: String
        Other_Logic_Corrections: String
        Other_Text_Corrections: String
        Other_Look_Feel_Corrections: String
        Other_Translations_Corrections: String
        Other_Other_Corrections: String
        Round_0_Changes: String
        RECODE_Round0Changes: String
        Round_1_Changes: String
        Round_2_Changes: String
        Round_3_Changes: String
        Round_4_Changes: String
        Round_5_Changes: String
        Round_6_Changes: String
        Round_7_Changes: String
        Round_8_Changes: String
        Round_9_Changes: String
        Round_10_Changes: String
        RECODE_Round1to10Changes: String
        LT_Corrections: String
        Timing_Versions: String
    }

    type Query {
        teams: [Team]
        employeeByWinUser(user: String): Headcount
        employees: [Headcount]
        projectsForTeam(OwnerName: String): [Project]
        searchForProject(keyWord: String!): [Project]
        projectByID(ID: Int!) : Project
        getProjectDiary: [Project]
    }
`;

export default makeExecutableSchema({
    typeDefs: schema,
    resolvers
});