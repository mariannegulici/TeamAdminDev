import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { List } from "immutable";
import { MdSnackBar } from "@angular/material";

import { MessagingService} from "../../shared/messaging.service";
import { SocketService} from "../../shared/socket.service";
import { TasksService } from "../tasks.service";

@Component({
  moduleId: module.id,
  selector: 'data-table', 
  templateUrl: 'data-table.component.html',
  styleUrls: ['data-table.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [TasksService]
})
export class DataTableComponent implements OnInit {
    @Input('membersData') private membersData: Array<any>;
    @Input()
    set assignmentFromMembers(assignmentFromMembers: Array<any>){
        this.taskAssignStack = assignmentFromMembers;
    }
    @Output() assignmentStack = new EventEmitter<Array<any>>(); 
    /**
     * Immutable List that stores all of the table data
     * @type {List<any>}
     */
    public tableData: List<any> = List();
    /**
     * Array that stores data for table header names and sorting sorting states -> asc, desc
     * @type {Array<any>}
     */
    private tableDataCols: Array<any> = [];
    private tableDataView: Array<any> = [];
    public taskAssignStack: Array<any> = [];
    errorMessage: any;

    constructor(private messagingService: MessagingService, private tasksService: TasksService, public snackbar: MdSnackBar) {
    }

    ngOnInit() {
        this.getTasks();
        this.getTasksStream();
    }

    getTasks() {
        this.tasksService
        .getTasks()
        .subscribe((tasks) => {
            tasks.forEach((value) => {
                this.tableData = this.tableData.push(value);
                this.tableDataView.push({
                    'data-row': true,
                    'data-row-focused': false,
                    'showDetails': false,
                    'color-for-sent': ( value.StatusTask == 'Sent' ) ? true : false,
                    'colorForAssigned': ( value.StatusTask == 'Assigned' ) ? true : false
                });
            });
            this.tableDataCols = Object.keys(this.tableData.first()).map((value) => {
                let newObj = {};
                newObj['columnName'] = value;
                newObj['sortDir'] = '';
                return newObj;
            });
            this.tableDataCols = this.tableDataCols.filter(this.filterArray);
        },
            error => this.errorMessage = <any>error
        );
    }

    filterArray(item) {
        if (item.columnName == 'id' || item.columnName == 'ProjectID')
            return false;
        else
            return true;
    }

    getTasksStream() {
        this.messagingService
        .getTasksStream()
        .subscribe((task) => {
            let key = this.tableData.findIndex(item => item.id === task.id);
            if (key >= 0) { // an existing task was updated
                this.tableData = this.tableData.update(key, value => task );
            } else { // a new task was added
                this.tableData = this.tableData.push(task);
            }
            this.tableDataView[key].colorForAssigned = ( task.StatusTask == 'Assigned' ) ? true : false
        });
    }

    sortTableByColumn(columnName, columnIndex) {
        let lesser = ( this.tableDataCols[columnIndex].sortDir == '' ) ? 'asc' : this.tableDataCols[columnIndex].sortDir;

        if (lesser == 'asc') {
            this.tableData = this.tableData.sortBy((item,key) =>item[columnName]).toList();
            this.tableDataCols[columnIndex].sortDir = 'desc';
        }else {
            this.tableData = this.tableData.sortBy((item,key) =>item[columnName]).reverse().toList();
            this.tableDataCols[columnIndex].sortDir = 'asc';
        }

        this.tableDataCols.forEach((val, i) => {
            if ( columnIndex != i )
                val['sortDir'] = '';
        });

        this.tableDataView.forEach((val, i) => {
                val['data-row-focused'] = false;
                val['showDetails'] = false;
        });
    }

    setFocus(index) {
        this.tableDataView.forEach((val, i) => {
            if ( index == i ) {
                val['data-row-focused'] = true;
                val['showDetails'] = true;
            } else {
                val['data-row-focused'] = false;
                val['showDetails'] = false;
            }
        });
    }

    assignTask(event, rowID) {
        let teamMemberStatus = this.membersData[0].find((elem)=>{
            if (elem.name === event.value)
                return elem.status;
        });
        if (teamMemberStatus.status == 'available') {
            this.tasksService.assignTask(rowID, event.value)
            .subscribe(
                success  => console.log(success),
                error =>  this.errorMessage = <any>error
                );
        } else {
            this.taskAssignStack.unshift({
                taskId: rowID,
                teamMember: event.value
            });
            // remove duplicate task assignment
            var hashTable = [];
            this.taskAssignStack = this.taskAssignStack.filter((item, index)=>{
                let match = Boolean(hashTable[item.taskId]);
                return (match ? false : hashTable[item.taskId] = true);
            });
            // remove duplicate task assignment
            this.snackbar.open(`${event.value} added to task queue!`,'',{
                duration: 2000
            });
            this.assignmentStack.emit(this.taskAssignStack);
        }
    }
}