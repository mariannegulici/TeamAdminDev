import { NgModule } from '@angular/core';
// Needed for ngFor, ngIf, etc Directives
import { CommonModule } from '@angular/common';
import { MaterialDesignLoaderModule } from '../material-design-loader.module';
import { FormsModule } from '@angular/forms';
import { DxPieChartModule } from 'devextreme-angular';

import { StatisticsComponent } from './statistics.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { CreateEfldWidgetComponent } from './widgets/efld/create-efld-widget.component';
import { EfldWidgetComponent } from './widgets/efld/efld-widget.component';
//import { DxDateBoxModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    WidgetsComponent,
    CreateEfldWidgetComponent,
    EfldWidgetComponent,
    StatisticsComponent
  ],
  entryComponents: [
    ],
  exports: [
    ],
  imports: [
    CommonModule,
    FormsModule,
    DxPieChartModule,
    MaterialDesignLoaderModule
  ],
  providers: [
  ]
})
export class StatisticsModule { }