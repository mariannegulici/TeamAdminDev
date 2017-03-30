import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-production', 
  templateUrl: 'production.component.html',
  styleUrls: ['production.component.css'],
  providers: []
})
export class ProductionComponent{

    teamMembers: Array<any> = [];
    taskAssignStack: Array<any> = [];
    assignmentArrayMembers: Array<any> = [];

    constructor() {
    }

    sendAssignmentStack(event) {
      this.taskAssignStack = event;
    }

    loadMembers(event){
      this.teamMembers = event;
    }

    sendAssignmentArrayMembers(event) {
      this.assignmentArrayMembers = event;
    }
}