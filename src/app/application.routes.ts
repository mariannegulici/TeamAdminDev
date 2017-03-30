import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductionComponent } from './production/production.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PersonalAreaComponent } from './personal-area/personal-area.component';

const applicationRoutes: Routes = [
    { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
    { path: 'landing-page', component: LandingPageComponent },
    { path: 'personal-area', component:  PersonalAreaComponent},
    { path: 'production', component: ProductionComponent }
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