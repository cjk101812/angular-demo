import { Injectable } from '@angular/core';

import { User } from './users';

@Injectable()
export class TeamService {
	getTeamMembers(): Promise<User[]> {
    return Promise.resolve([
      {id:1, name:"John Doe", team:"N/A", experience:1, imageURL:"assets/images/other-user.jpg"},
      {id:2, name:"Cullen Kirkpatrick", team:"Agora", experience:2, imageURL:"assets/images/cullen.jpg"}
    ]);
  }
}
