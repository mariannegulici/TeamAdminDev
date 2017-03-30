import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";

import { Observable } from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TasksService {
    private host: string = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port;
    private tasksURL = '/tasks';
    private _assignTaskURL = '';

    constructor(private http: Http) {}

    getTasks(): Observable<any> {
        return this.http.get(this.tasksURL)
                        .map(this.extractData)
                        .catch(this.handleError)
    }

    assignTask(taskID, teamMember) {
        this._assignTaskURL = '/assigntask';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify({teamMember, taskID});
        console.log(body);

        return this.http.post(this._assignTaskURL, body, options)
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