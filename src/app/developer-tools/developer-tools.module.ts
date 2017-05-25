import { NgModule } from '@angular/core';
// Needed for ngFor, ngIf, etc Directives
import { CommonModule } from '@angular/common';
import { MaterialDesignLoaderModule } from '../material-design-loader.module';
import { FormsModule } from '@angular/forms';

import { DeveloperToolsComponent } from './developer-tools.component';
import { DeveloperToolsService } from './developer-tools.service';

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
    MaterialDesignLoaderModule
  ],
  providers: [
    DeveloperToolsService
  ]
})
export class DeveloperToolsModule { }