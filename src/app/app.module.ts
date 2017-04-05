import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductionModule } from './production/production.module';
import { PersonalAreaModule } from './personal-area/personal-area.module';
import { DeveloperToolsModule } from './developer-tools/developer-tools.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { ApplicationRoutes } from './application.routes';
import "hammerjs";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProductionModule,
    PersonalAreaModule,
    DeveloperToolsModule,
    LandingPageModule,
    MaterialModule,
    BrowserAnimationsModule,
    ApplicationRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
