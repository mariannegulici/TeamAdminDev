import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as io from "socket.io-client";

import { SocketItem } from "../../models/socket-item.model"

@Injectable()
export class SocketService {
    private name: string;
    private host: string = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port;
    socket: SocketIOClient.Socket;

    /**
     * Creates an instance of SocketService.
     */
    constructor() {
        let socketURL = this.host;
        this.socket = io.connect(socketURL);
        this.socket.on("connect", () => this.connect());
        this.socket.on("disconnect", () => this.disconnect());
        this.socket.on("error", (error: string) => {
            console.log(`ERROR: "${error}" (${socketURL})`);
        });
    }

    /**
     * get items Observable
     * 
     * @param {string} name - ex: get('tasks') will listen for tasks events emited by the server
     * @returns {Observable<any>} - will return an observable  
     */
    get(name: string): Observable<any> {
        this.name = name;
        // Return observable which follows "create" and "remove" signals from socket stream
        return Observable.create( (observer: any) => {
            this.socket.on(this.name, (item: any) => observer.next({ action: this.name, item: item }) );
            return () => this.socket.close();
        });
    }

    /**
     * handle opening of new connection
     */
    private connect() {
        console.log('Socket connection open');
        
        //request initial task list
        //TODO make this general 
        this.socket.emit("initialTaskList", name);
    }

    /**
     * handle closing of connection
     */
    private disconnect() {
        console.log('Socket connection closed');
    }
}