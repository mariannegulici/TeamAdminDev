import { Injectable } from '@angular/core';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import { Observable, Subject } from "rxjs";
import gql from 'graphql-tag';

export class EfldDataModel {
    EFLDYesNo: string;
    total: number;
}

export class DiaryCompletionDataModel {
    DiaryYesNo: string;
    total: number;
}

@Injectable()
export class EfldWidgetService {

    constructor(private apollo: Apollo) {}

    getEFLDInfoProfile = gql`
        query getEFLDInfoProfile{
        getProjectDiary {
                ProjectID
                DiaryInfo {
                    ProjectID
                    Err_foundRE
                }
            }
        }
    `;

    getEFLDInfo():Observable<any> {
        return this.apollo.watchQuery({
            query: this.getEFLDInfoProfile
        });
    }
}