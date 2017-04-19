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
            ProjectName
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