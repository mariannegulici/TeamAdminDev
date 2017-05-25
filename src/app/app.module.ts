import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialDesignLoaderModule } from './material-design-loader.module';

import { ProductionModule } from './production/production.module';
import { StatisticsModule } from './statistics/statistics.module';
import { PersonalAreaModule } from './personal-area/personal-area.module';
import { DeveloperToolsModule } from './developer-tools/developer-tools.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { ApolloClientModule } from './apollo-client.module';
import { ApplicationRoutes } from './application.routes';
import "hammerjs";

import { AppComponent } from './app.component';
import { ProjectSearchComponent } from './project-search/project-search.component';
import { ProjectsSearchOptionsComponent } from './project-search/search-options.component';
import { ProjectsSearchDetailsComponent } from './project-search/search-details.component';

import { ProjectSearchDispatcherService } from './dispatcher-services/project-search.dispatcher.service';
import { ClipboardService } from './shared/clipboard.service';
import { ClipboardDirective } from './shared/clipboard.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProjectSearchComponent,
    ProjectsSearchOptionsComponent,
    ProjectsSearchDetailsComponent,
    ClipboardDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProductionModule,
    PersonalAreaModule,
    DeveloperToolsModule,
    StatisticsModule,
    LandingPageModule,
    MaterialDesignLoaderModule,
    ApolloClientModule,
    ApplicationRoutes
  ],
  providers: [
    ProjectSearchDispatcherService,
    ClipboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
