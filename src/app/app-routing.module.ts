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
import { ProfileComponent } from './profile/profile.component';
import { EnaComponent } from './ena/ena.component';
import { CallbackComponent } from './callback/callback.component';
import { RiskModellingComponent } from './risk-modelling/risk-modelling.component';
import { SoftwareComponent } from './software/software.component';
import { LandscapeFlammabilityComponent } from './landscape-flammability/landscape-flammability.component';
import { FireBehaviourComponent } from './fire-behaviour/fire-behaviour.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { HotTopicsComponent } from './hot-topics/hot-topics.component';
import { ExternalApiComponent } from './external-api/external-api.component';
import { AuthGuard } from './auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, data: { state: 'home', breadcrumb: 'home' } },
    { path: 'team', component: TeamComponent, data: { state: 'team', breadcrumb: 'team' } },
    { path: 'projects', component: ProjectsComponent, data: { state: 'projects', breadcrumb: 'projects' } },
    { path: 'research', component: ResearchComponent, data: { state: 'research', breadcrumb: 'research' } },
    { path: 'hot-topics', component: HotTopicsComponent, data: {state: 'hottopics', breadcrumb: 'hot topics'} },
    { path: 'software', component: SoftwareComponent, data: { state: 'software', breadcrumb: 'software' } },
    // { path: 'opportunities', component: OpportunitiesComponent, data: { state: 'opportunities', breadcrumb: 'opportunities' } },

    // { path: 'coursework', component: CourseworkComponent, data: { state: 'coursework', breadcrumb: 'coursework' } },

    { path: 'behaviour', component: FireBehaviourComponent, data: { state: 'behaviour', breadcrumb: 'behaviour' } },
    { path: 'flammability', component: LandscapeFlammabilityComponent, data: { state: 'flammability', breadcrumb: 'flammability' } },
    { path: 'risk', component: RiskModellingComponent, data: { state: 'risk', breadcrumb: 'risk' } },

    {
        path: 'profile',
        component: ProfileComponent, data: { state: 'profile', breadcrumb: 'profile' }
    },
    {
        path: 'callback',
        component: CallbackComponent, data: { state: 'callback', breadcrumb: 'callback' }
    },

    { path: 'news', component: NewsComponent, data: { state: 'news', breadcrumb: 'news' } },

    {
        path: 'ena',
        component: EnaComponent,
        data: { state: 'ena', breadcrumb: 'ena' }
    },
    {
        path: 'external-api',
        component: ExternalApiComponent,
        canActivate: [AuthGuard]
    },

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
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorService,
            multi: true
        }
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
