import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MdMenuModule, MdButtonModule, MdCardModule, MdListModule, MdTooltipModule, MdSelectModule, MdInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigationComponent } from './nav/navigation.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { TeamComponent } from './team/team.component';

import { NavigationService } from './nav/navigation.service';
import { TeamService } from './team/team.service';
import { TimesheetService } from './timesheet/timesheet.service';

const appRoutes: Routes = [
  { path: 'timesheet', 
    component: TimesheetComponent 
  },
  { path: 'team', 
    component: TeamComponent 
  },
  { path: '',
    redirectTo: '/timesheet',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TimesheetComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, MdMenuModule, MdButtonModule, MdCardModule, MdListModule, MdTooltipModule, MdSelectModule, MdInputModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    NavigationService,
    TeamService,
    TimesheetService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
