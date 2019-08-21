import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { ProjectsComponent } from './projects/projects.component';
import { NewsComponent } from './news/news.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResearchComponent } from './research/research.component';
import { CourseworkComponent } from './coursework/coursework.component';
import { ContactComponent } from './footer/contact/contact.component';

import { RiskModellingComponent } from './risk-modelling/risk-modelling.component';
import { SoftwareComponent } from './software/software.component';

import { LandscapeFlammabilityComponent } from './landscape-flammability/landscape-flammability.component';
import { FireBehaviourComponent } from './fire-behaviour/fire-behaviour.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, data: { state: 'home' } },
    { path: 'team', component: TeamComponent, data: { state: 'team' } },
    { path: 'projects', component: ProjectsComponent, data: { state: 'projects' } },
    { path: 'research', component: ResearchComponent, data: { state: 'research' } },

    { path: 'software', component: SoftwareComponent, data: { state: 'software' } },

    { path: 'coursework', component: CourseworkComponent, data: { state: 'coursework' } },

    { path: 'behaviour', component: FireBehaviourComponent, data: { state: 'behaviour' } },
    { path: 'flammability', component: LandscapeFlammabilityComponent, data: { state: 'flammability' } },
    { path: 'risk', component: RiskModellingComponent, data: { state: 'risk' } },


    { path: 'news', component: NewsComponent, data: { state: 'news' } },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent, data: { state: '404' } }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: false
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
