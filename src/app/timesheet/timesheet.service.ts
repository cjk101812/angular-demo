import { Injectable } from '@angular/core';

import { Log } from './timesheet-log';

@Injectable()
export class TimesheetService {
  logs = [
    {id:1, project:"Agora", user:"Cullen Kirkpatrick", hours:8, type:"work"},
    {id:2, project:"Training", user:"Cullen Kirkpatrick", hours:10, type:"training"},
    {id:3, project:"PTO", user:"Cullen Kirkpatrick", hours:6, type:"pto"}
  ];

	getTimesheetEntries(): Promise<Log[]> {
    return Promise.resolve(this.logs);
  }

  addTimesheetEntry(entryDetails): Promise<Log[]> {
    this.logs.push({id: entryDetails.id, project: entryDetails.project, user: entryDetails.user, hours: entryDetails.hours, type: entryDetails.type});
    return Promise.resolve(this.logs);
  }
}
