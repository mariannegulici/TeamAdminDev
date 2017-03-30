import { NgModule } from '@angular/core';
// Needed for ngFor, ngIf, etc Directives
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page.component';
import { ProductionComponent } from '../production/production.component';

const landingPageRoutes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: "full" },
  { path: 'production', component: ProductionComponent }
]

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  entryComponents: [
    ],
  exports: [
    RouterModule
    ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(landingPageRoutes)
  ],
  providers: [
  ]
})
export class LandingPageModule { }