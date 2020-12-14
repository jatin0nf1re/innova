import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DotComponent } from './dot/dot.component';
import { CanvasComponent } from './canvas/canvas.component';
import { LecturesComponent } from './lectures/lectures.component';
import { TemplateBasicComponent } from './template-basic/template-basic.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DotComponent,
    CanvasComponent,
    LecturesComponent,
    TemplateBasicComponent,
    CompetitionsComponent,
    WorkshopsComponent,
    SponsorsComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
