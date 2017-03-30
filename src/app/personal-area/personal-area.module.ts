import { NgModule } from '@angular/core';
// Needed for ngFor, ngIf, etc Directives
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { PersonalAreaComponent } from './personal-area.component';

@NgModule({
  declarations: [
    PersonalAreaComponent
  ],
  entryComponents: [
    ],
  exports: [
    ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [
  ]
})
export class PersonalAreaModule { }