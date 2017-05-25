import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductionComponent } from './production/production.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PersonalAreaComponent } from './personal-area/personal-area.component';
import { DeveloperToolsComponent } from './developer-tools/developer-tools.component';
import { StatisticsComponent } from './statistics/statistics.component';

const applicationRoutes: Routes = [
    { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
    { path: 'landing-page', component: LandingPageComponent },
    { path: 'personal-area', component:  PersonalAreaComponent},
    { path: 'production', component: ProductionComponent },
    { path: 'statistics', component: StatisticsComponent },
    { path: 'developer-tools', component: DeveloperToolsComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(applicationRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ApplicationRoutes {}