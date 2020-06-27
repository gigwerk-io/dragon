import { Injectable } from '@angular/core';
import { User } from '../interfaces/models/User';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  FilterFreelancer(e: string, users: User[], allUsers: User[]) {
    let Freelancer = users;

    if (!e.length) {
      return allUsers;
    }

    const needle = e.toLowerCase();

    return Freelancer = users.filter((filteredUsers) => {
      const hayStack =
        (
          filteredUsers.first_name +
          filteredUsers.last_name +
          filteredUsers.profile.description
        )
          .toLowerCase()
          .split(' ')
          .join('');
      return hayStack.includes(needle);
    });

  }

}
