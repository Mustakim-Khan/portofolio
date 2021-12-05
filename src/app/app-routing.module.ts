import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./views/dashboard/dashboard.component";
import {PresentationComponent} from "./views/presentation/presentation.component";
import {EducationComponent} from "./views/education/education.component";
import {ProjectsComponent} from "./views/projects/projects.component";
import {ContactComponent} from "./views/contact/contact.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardComponent, data: { animation: 'isLeft' } },
  { path: 'presentation', component: PresentationComponent, data: { animation: 'isLeft' } },
  { path: 'education', component: EducationComponent, data: { animation: 'isLeft' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'isRight' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'isRight' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
