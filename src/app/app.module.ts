import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ParticlesModule } from './particles/particles.module';

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

import { routerTransition } from './router.animations';

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
    TeamMemberComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ParticlesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
