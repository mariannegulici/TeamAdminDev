import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";

import { Observable } from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RowDetailsService {
    private rowProjectID: String = '';
    private backendAPI_entryPoint = '';
    private _addNewNoteURL = '';

    constructor(private http: Http) {}

    getTasksbyProjectID(theProjectID: String): Observable<any> {
        this.backendAPI_entryPoint = `/tasks/${theProjectID}`;
        return this.http.get(this.backendAPI_entryPoint)
                        .map(this.extractData)
                        .catch(this.handleError)
    }

    addNote(taskID, message) {
        this._addNewNoteURL = '/notes';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify({message, taskID});

        return this.http.post(this._addNewNoteURL, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
        errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}