import { Injectable } from '@angular/core';
import { User } from '../interfaces/models/User';
import { MarketplaceJob } from '../interfaces/models/MarketplaceJob';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  filterJobsTable(e: string, jobs: MarketplaceJob[], allJobs: MarketplaceJob[]) {
    let filteredJobs = jobs;

    if (!e.length) {
      return allJobs;
    }

    const needle = e.toLowerCase();

    return filteredJobs = jobs.filter((filteredJob) => {
      const hayStack =
        (
          filteredJob.customer.email +
          filteredJob.price +
          filteredJob.customer.first_name +
          filteredJob.customer.last_name +
          filteredJob.intensity +
          filteredJob.views
        )
          .toLowerCase()
          .split(' ')
          .join('');
      return hayStack.includes(needle);
    });
  }

  filterFreelancer(e: string, users: User[], allUsers: User[]) {
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
