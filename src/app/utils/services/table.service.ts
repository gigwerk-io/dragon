import { Injectable } from '@angular/core';

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

}
