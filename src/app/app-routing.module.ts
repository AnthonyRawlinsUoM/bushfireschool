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

export const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { state: 'home' } },
  { path: 'team', component: TeamComponent, data: { state: 'team' } },
  { path: 'projects', component: ProjectsComponent, data: { state: 'projects' } },
  { path: 'research', component: ResearchComponent, data: { state: 'research' } },
  { path: 'coursework', component: CourseworkComponent, data: { state: 'coursework' } },
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
