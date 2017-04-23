import { Injectable } from "@angular/core";
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import { Observable, Subject } from "rxjs";
import gql from 'graphql-tag';

@Injectable()
export class ProjectSearchService {

    constructor(private apollo: Apollo) {}

    searchForProjectProfile = gql`
        query searchForProjectProfile($keyWord: String!){
        searchForProject(keyWord: $keyWord){
            ProjectID
            ProjectName
            EventNo
            ProjectFolder
            JobBookNo
            ProjectStatus
            TeamInfo {
                SW
                QA
                PM
                }
            }
        }
    `;

    getProjectsByKeyword(keyWord: String):Observable<any> {
        return this.apollo.watchQuery({
        query: this.searchForProjectProfile,
            variables: {
                keyWord: keyWord
            }
        });
    }

}