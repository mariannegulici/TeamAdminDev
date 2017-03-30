import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SocketService } from "../shared/socket.service";

import { SocketItem } from "../../models/socket-item.model";

@Injectable()
export class MessagingService {

    constructor(private socketService: SocketService){}

    getTasksStream(): Observable<any> {
        return Observable.create((observer: any) => {   
            this.socketService
            .get("tasks")
            .subscribe(
                (socketItem: SocketItem) => {
                    let message = socketItem.item;
                    observer.next(message);
                },
                error => console.log(error)
            );
        });
    }

    getTeamStream(): Observable<any> {
        return Observable.create((observer: any) => {   
            this.socketService
            .get("team")
            .subscribe(
                (socketItem: SocketItem) => {
                    let message = socketItem.item;
                    observer.next(message);
                },
                error => console.log(error)
            );
        });
    }
}