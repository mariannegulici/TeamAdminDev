import { NgModule } from '@angular/core';
// Needed for ngFor, ngIf, etc Directives
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { DeveloperToolsComponent } from './developer-tools.component';

@NgModule({
  declarations: [
    DeveloperToolsComponent
  ],
  entryComponents: [
    ],
  exports: [
    ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  providers: [
  ]
})
export class DeveloperToolsModule { }