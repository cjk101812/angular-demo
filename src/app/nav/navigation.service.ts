import { Injectable } from '@angular/core';

import { Tab } from './tabs';

@Injectable()
export class NavigationService {
	getTabs(): Promise<Tab[]> {
    return Promise.resolve([
      {name:"Timesheet", link:""},
      {name:"Team", link:""}
    ]);
  }
}
