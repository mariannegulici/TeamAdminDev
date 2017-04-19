import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialDesignLoaderModule } from './material-design-loader.module';

import { ProductionModule } from './production/production.module';
import { PersonalAreaModule } from './personal-area/personal-area.module';
import { DeveloperToolsModule } from './developer-tools/developer-tools.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { ApolloClientModule } from './apollo-client.module';
import { ApplicationRoutes } from './application.routes';
import "hammerjs";

import { AppComponent } from './app.component';
import { ProjectSearchComponent } from './project-search/project-search.component';

import { ProjectSearchDispatcherService } from './dispatcher-services/project-search.dispatcher.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProductionModule,
    PersonalAreaModule,
    DeveloperToolsModule,
    LandingPageModule,
    MaterialDesignLoaderModule,
    ApolloClientModule,
    ApplicationRoutes
  ],
  providers: [
    ProjectSearchDispatcherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
