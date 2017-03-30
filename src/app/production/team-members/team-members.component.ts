import { Component, ViewEncapsulation, OnInit, EventEmitter, Input, Output } from "@angular/core";

import { TeamMembersService } from "./team-members.service";
import { MessagingService} from "../../shared/messaging.service";
import { SocketService} from "../../shared/socket.service";
import { TasksService} from "../tasks.service";

@Component({
  moduleId: module.id,
  selector: 'team-members', 
  templateUrl: 'team-members.component.html',
  styleUrls: ['team-members.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [TeamMembersService, TasksService]
})
export class TeamMembersComponent implements OnInit {

    private team: Array<any> = [];
    @Input('assignmentArray') private assignmentArray: Array<any>;
    @Output() MembersRequest = new EventEmitter<Array<any>>();
    @Output() assignmentArrayMembers = new EventEmitter<Array<any>>();
    private errorMessage: any;

    constructor(private messagingService: MessagingService, private teamMembersService: TeamMembersService, private tasksService: TasksService) {
    }

    ngOnInit() {
        this.getTeam();
        this.getTeamStream();
    }

    getTeam() {
        this.teamMembersService
        .getTeam()
        .subscribe((team) => {
            team.forEach((value) => {
                this.team.push(value.members);
            });
        },
            error => this.errorMessage = <any>error
        );
        this.MembersRequest.emit(this.team);
    }

    getTeamStream() {
        this.messagingService
        .getTeamStream()
        .subscribe((team) => {
            this.team[0] = team.members;
            this.team[0].forEach((elem)=>{
                if (elem.status == 'available') {
                    let teamMemberIndex = 0;
                    let teamMemberInStack = this.assignmentArray.find((element,index)=>{
                        if (elem.name === element.teamMember) {
                            teamMemberIndex = index;
                            return element.taskId;
                        }
                    });
                    if (typeof teamMemberInStack !== 'undefined') {
                        this.tasksService.assignTask(teamMemberInStack.taskId, teamMemberInStack.teamMember)
                        .subscribe(
                            success => {
                                this.assignmentArray.splice(teamMemberIndex, 1);
                                console.log(this.assignmentArray);
                                this.assignmentArrayMembers.emit(this.assignmentArray);
                            },
                            error => this.errorMessage = <any>error
                        );
                    }
                }
            });
        });
    }
}