import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { MainPageComponent } from './views/main-page/main-page.component';
import { AboutComponent } from './views/about/about.component';
import {MatButtonModule} from "@angular/material/button";
import { ParcoursComponent } from './views/parcours/parcours.component';
import {MatTabsModule} from "@angular/material/tabs";
import { ProjectsComponent } from './views/projects/projects.component';
import { ExperienceComponent } from './views/experience/experience.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatStepperModule} from "@angular/material/stepper";
import { TimelineComponent } from './components/timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AboutComponent,
    ParcoursComponent,
    ProjectsComponent,
    ExperienceComponent,
    TimelineComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatTabsModule,
        MatGridListModule,
        MatStepperModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
