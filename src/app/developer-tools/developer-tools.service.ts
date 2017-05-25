import { Injectable } from "@angular/core";
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import { Observable, Subject } from "rxjs";
import gql from 'graphql-tag';

@Injectable()
export class DeveloperToolsService {

    constructor(private apollo: Apollo) {}

    getAllTeamsProfile = gql`
        query getAllTeamsProfile{
        teams{
                TeamDetailsID
                TeamName
            }
        }
    `;

    getAllTeams():Observable<any> {
        return this.apollo.watchQuery({
            query: this.getAllTeamsProfile
        });
    }

}