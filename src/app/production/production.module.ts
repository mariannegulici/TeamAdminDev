import {NgModule} from '@angular/core';
// Needed for ngFor, ngIf, etc Directives
import { CommonModule } from '@angular/common';
import { MaterialModule } from "@angular/material";

import { ProductionComponent } from './production.component';
import { ProductionSidenavComponent } from "./sidenav/production-sidenav.component";
import { DataTableComponent } from "./data-table/data-table.component";
import { RowDetailsComponent } from "./data-table/row-details.component";
import { TeamMembersComponent } from "./team-members/team-members.component";
import { AddNewNote } from "./data-table/add-new-note.component";

import { MessagingService} from "../shared/messaging.service";
import { SocketService} from "../shared/socket.service";

// Import wysiwyg editor
import { FroalaViewModule, FroalaEditorModule } from "angular2-froala-wysiwyg";

@NgModule({
  declarations: [
    ProductionComponent,
    ProductionSidenavComponent,
    DataTableComponent,
    RowDetailsComponent,
    TeamMembersComponent,
    AddNewNote
  ],
  entryComponents: [
    AddNewNote
    ],
  exports: [ 
    ProductionComponent,
    ProductionSidenavComponent
    ],
  imports: [
    CommonModule,
    MaterialModule,
    FroalaViewModule.forRoot(),
    FroalaEditorModule.forRoot()
    //SharedModule
  ],
  providers: [
    MessagingService,
    SocketService
  ]
})
export class ProductionModule { }