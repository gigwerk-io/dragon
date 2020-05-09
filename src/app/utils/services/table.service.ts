import { Injectable } from '@angular/core';
import { User } from '../interfaces/user/User';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }


  invitationsSearch(e: string, allUsers: User[]): User[] {

    let filteredUsers = allUsers;

    if (!e.length) {
      return allUsers;
    }

    const needle = e.toLowerCase();

    return filteredUsers = allUsers.filter((user: User) => {
      const hayStack = (user.id + user.organization_id + user.email).toLowerCase().split(' ').join('');
      return hayStack.includes(needle);
    });
  }
}
