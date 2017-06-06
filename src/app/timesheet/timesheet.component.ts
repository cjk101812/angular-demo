import { Component, OnInit } from '@angular/core';

import { TimesheetService } from './timesheet.service';
import { Log } from './timesheet-log';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {

  constructor(private timesheetService: TimesheetService) { }
  logs: Log[];
  entry = {
    id: 4
  };

  ngOnInit() {
    this.getTimesheetEntries();
  }

  getTimesheetEntries(): void {
    this.timesheetService.getTimesheetEntries().then(logs => this.logs = logs);
  }

  addTimesheetEntry(entryDetails): void {  
    console.log("TEST: " + JSON.stringify(entryDetails)); 
    this.timesheetService.addTimesheetEntry(entryDetails).then(logs => this.logs = logs);
  }

}
