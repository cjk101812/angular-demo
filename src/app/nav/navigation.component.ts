import { Component, OnInit } from '@angular/core';
import { MdMenuModule, MdButtonModule } from '@angular/material';

import { NavigationService } from './navigation.service';
import { Tab } from './tabs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }
  tabs: Tab[];

  ngOnInit() {
    this.getTabs();
  }

  getTabs(): void {
    this.navigationService.getTabs().then(tabs => this.tabs = tabs);
  }

}
