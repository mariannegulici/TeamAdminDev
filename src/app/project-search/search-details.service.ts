import { Injectable } from "@angular/core";
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import { Observable, Subject } from "rxjs";
import gql from 'graphql-tag';

@Injectable()
export class SearchDetailsService {

    constructor(private apollo: Apollo) {}

    searchProjectByID = gql`
        query searchForProjectProfile($ID: Int!){
        projectByID(ID: $ID){
                ProjectID
                LeadRec
                DiaryOrNot
                ProjectName
                ProjectStatus
                JobBookNo
                EventNo
                ProjectFolder
                ProjectType
                FieldCountry
                Client
                InfoComments
                TeamInfo {
                    PM
                    PMTeam
                    PMSecond
                    PMSecondTeam
                    SW
                    SWTeam
                    SWSecond
                    SWSecondTeam
                    QA
                    QATeam
                    QASecond
                    QASecondTeam
                    DP
                    DPTeam
                    DPSecond
                    DPSecondTeam
                    QE
                    QETeam
                    MP
                    MPTeam
                    DO
                    DOTeam
                    FC
                    FCTeam
                    ExtSW
                    ExtSWTeam
                    ExtQA
                    ExtQATeam
                    ExtDP
                    ExtDPTeam
                    REP
                    REPTeam
                    REPSecond
                    REPSecondTeam
                    REPQA
                    REPQATeam
                    ExtREP
                    ExtREPTeam
                    FCSecond
                    FCSecondTeam
                }
                TimingInfo {
                    Actual_StartJob
                    Actual_SendMaterials
                    Actual_KickOffMeeting
                    Actual_StartProgramming
                    Actual_QualityCheck
                    Actual_LinkToClient
                    Actual_LaunchField
                    Actual_CloseField
                    Actual_EndJob
                    Actual_StartDPDeliv
                    Actual_EndDPDeliv
                    Actual_EndJobDP
                    Actual_StartCoding
                    Actual_EndCoding
                    Actual_BriefingMeeting
                    Actual_ReportingMaterial
                    Actual_ProgramReporting
                    Actual_DelivDraft
                    Actual_ReportingChanges
                    Actual_FinalReport
                }
            }
        }
    `;

    getProjectByID(ID: number):Observable<any> {
        return this.apollo.watchQuery({
        query: this.searchProjectByID,
            variables: {
                ID: ID
            }
        });
    }

}