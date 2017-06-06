import { Component, OnInit } from '@angular/core';

import { TeamService } from './team.service';
import { User } from './users';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor(private teamService: TeamService) { }
  users: User[];

  ngOnInit() {
    this.getTeamMembers();
  }

  getTeamMembers(): void {
    this.teamService.getTeamMembers().then(users => this.users = users);
  }

}
