import { Component, OnInit, ViewEncapsulation, OnDestroy, Input } from '@angular/core';
import { MdDialog, MdSnackBar } from "@angular/material";
import { RowDetailsService } from './row-details.service';
import { AddNewNote } from "./add-new-note.component";

@Component({
  moduleId: module.id,
  selector: 'row-data-details', 
  templateUrl: 'row-details.component.html',
  styleUrls: ['row-details.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [RowDetailsService]
})
export class RowDetailsComponent implements OnInit, OnDestroy {
    @Input('rowProjectID') private rowProjectID: string;
    @Input('rowTaskID') private rowTaskID: string;
    private rowDetailsTasks: Array<any> = [];
    private rowDetailsClasses: Array<any> = [];
    private showProgressBar: Boolean = false;
    private taskIDforNotes: String;
    private taskNotes: Array<any> = [];
    private currentTaskIndex: number;
    private errorMessage: any;

    constructor(private rowDetailsService: RowDetailsService, public dialog: MdDialog, public snackbar: MdSnackBar) {}

    ngOnInit() {
      this.showProgressBar = true;
      this.getTasksbyProjectID();
    }

    getTasksbyProjectID() {
        this.rowDetailsService
        .getTasksbyProjectID(this.rowProjectID)
        .subscribe((task) => {
            task.forEach((value) => {
                this.rowDetailsTasks.push(value);
                this.rowDetailsClasses.push({
                  'rowDetailFocus': false
                });
            });
            let initialRowIndex = this.rowDetailsTasks.findIndex((value)=>{
              return value.id === this.rowTaskID;
            });
            this.showDetailsforProjectTask(initialRowIndex);
        },
            error => this.errorMessage = <any>error
        );
        this.showProgressBar = false;
    }

    showDetailsforProjectTask(taskIndex: number) {
      this.currentTaskIndex = taskIndex;
      this.taskIDforNotes = this.rowDetailsTasks[taskIndex].id;
      this.taskNotes = this.rowDetailsTasks[taskIndex].notes;
      this.rowDetailsClasses.forEach((val, i) => {
            if ( taskIndex == i ) {
                val['rowDetailFocus'] = true;
            } else {
                val['rowDetailFocus'] = false;
            }
        });
    }

    addNewNote() {
      let dialogRef = this.dialog.open(AddNewNote, {
        disableClose: true
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result == 'Dialog closed!' || typeof result == 'undefined' ){
          this.snackbar.open('Your note was discarded!','',{
            duration: 2000
          });
        } else {
          this.rowDetailsService.addNote(this.taskIDforNotes, result)
          .subscribe(
              success => {
                if ( typeof this.taskNotes == 'undefined' ) {
                  this.taskNotes = [];
                  this.rowDetailsTasks[this.currentTaskIndex].notes = [];
                  this.taskNotes.push({
                    date: new Date(),
                    message: result
                  });
                }
                this.rowDetailsTasks[this.currentTaskIndex].notes.push({
                  date: new Date(),
                  message: result
                });
                
                this.snackbar.open('New note added successfully!','',{
                  duration: 2000
                });
              },
              error => this.errorMessage = <any>error
          );
        }
      });
    }

    ngOnDestroy() {}
}