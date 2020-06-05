import { Injectable } from '@angular/core';
import { User, MarketplaceProposal, MarketplaceJob, Payment } from '../interfaces/user/User';

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

  searchPastPayouts(e: string, allPayouts: Payment[], currentTable: Payment[]) {

    let filteredPayments = allPayouts;

    if (!e.length) {
      return currentTable;
    }

    const needle = e.toLowerCase();

    return filteredPayments = allPayouts.filter((payment: Payment) => {
      const hayStack = (payment.marketplace_job.intensity + payment.amount + payment.marketplace_job.status)
        .toLowerCase()
        .split(' ')
        .join('');
      return hayStack.includes(needle);
    });
  }

  searchPastJobs(e: string, jobs: MarketplaceJob[], currentTable: MarketplaceJob[]) {

    let filteredJobs = jobs;

    if (!e.length) {
      return currentTable;
    }

    const needle = e.toLowerCase();

    return filteredJobs = jobs.filter((job: MarketplaceJob) => {
      const hayStack = (job.intensity + job.price + job.status).toLowerCase().split(' ').join('');
      return hayStack.includes(needle);
    });
  }

  searchPastRequest(e: string, request: MarketplaceProposal[], currentTable: MarketplaceProposal[]) {

    let filteredRequests = request;

    if (!e.length) {
      return currentTable;
    }

    const needle = e.toLowerCase();

    return filteredRequests = request.filter((job_request: MarketplaceProposal) => {
      const hayStack =
        (job_request.marketplace_job.intensity + job_request.marketplace_job.price + job_request.status + job_request.marketplace_job.views)
          .toLowerCase()
          .split(' ')
          .join('');
      return hayStack.includes(needle);
    });
  }

}
