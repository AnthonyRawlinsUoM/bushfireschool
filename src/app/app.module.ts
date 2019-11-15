import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {BreadcrumbsModule} from "ng6-breadcrumbs";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { TeamMemberComponent } from './team/team-member/team-member.component';
import { ProjectsComponent } from './projects/projects.component';
import { NewsComponent } from './news/news.component';
import { PrimaryNavigationComponent } from './primary-navigation/primary-navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { ResearchComponent } from './research/research.component';
import { CourseworkComponent } from './coursework/coursework.component';
import { ContactComponent } from './footer/contact/contact.component';
import { ParticlesComponent } from './particles/particles.component';
import { routerTransition } from './router.animations';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { RiskModellingComponent } from './risk-modelling/risk-modelling.component';
import { SoftwareComponent } from './software/software.component';
import { LandscapeFlammabilityComponent } from './landscape-flammability/landscape-flammability.component';
import { FireBehaviourComponent } from './fire-behaviour/fire-behaviour.component';
import { ParallaxDirective } from './parallax.directive';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CoursesComponent } from './courses/courses.component';
import { ProfileComponent } from './profile/profile.component';
import { EnaComponent } from './ena/ena.component';
import { ExternalApiComponent } from './external-api/external-api.component';
import { CallbackComponent } from './callback/callback.component';
import { HotTopicsComponent } from './hot-topics/hot-topics.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamComponent,
    ProjectsComponent,
    NewsComponent,
    PrimaryNavigationComponent,
    PageNotFoundComponent,
    FooterComponent,
    ResearchComponent,
    CourseworkComponent,
    ContactComponent,
    TeamMemberComponent,
    ParticlesComponent,
    OpportunitiesComponent,
    RiskModellingComponent,
    SoftwareComponent,
    LandscapeFlammabilityComponent,
    FireBehaviourComponent,
    ParallaxDirective,
    BreadcrumbsComponent,
    CoursesComponent,
    ProfileComponent,
    EnaComponent,
    ExternalApiComponent,
    CallbackComponent,
    HotTopicsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxTwitterTimelineModule,
    BreadcrumbsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
