import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./views/dashboard/dashboard.component";
import {PresentationComponent} from "./views/presentation1/presentation.component";
import {EducationComponent} from "./views/education/education.component";
import {ProjectsComponent} from "./views/projects/projects.component";
import {ContactComponent} from "./views/contact/contact.component";
import {Presentation2Component} from "./views/presentation2/presentation2.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardComponent, data: { animation: 'isLeft' } },
  { path: 'presentation/1', component: PresentationComponent, data: { animation: 'isLeft' } },
  { path: 'presentation/2', component: Presentation2Component, data: { animation: 'isLeft' } },
  { path: 'education', component: EducationComponent, data: { animation: 'isLeft' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'isRight' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'isRight' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
