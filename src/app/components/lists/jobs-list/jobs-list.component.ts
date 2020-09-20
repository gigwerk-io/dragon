import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { TableService } from '../../../utils/services/table.service';
import { MarketplaceJob } from '../../../utils/interfaces/models/MarketplaceJob';
import { PaginationService } from '../../../utils/services/pagination.service';
import { JobsService } from 'src/app/utils/services/jobs.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css'],
  providers: [PaginationService]
})
export class JobsListComponent implements OnInit, OnChanges, OnDestroy {
  // tslint:disable-next-line: no-input-rename
  @Input('jobs') jobs: MarketplaceJob[];
  allJobs: MarketplaceJob[];
  windowSize = 5;
  selectedJob: number;
  clearJobSlideoverSubscription: Subscription;

  constructor(
    private tableService: TableService,
    public paginationService: PaginationService,
    public jobService: JobsService
  ) { }

  ngOnInit() {
    this.clearJobSlideoverSubscription = this.jobService.clearJobSliderover.subscribe(() => this.selectedJob = undefined);
  }

  ngOnChanges() {
    if (this.jobs !== undefined) {
      this.allJobs = this.jobs;
      this.paginationService.setupPagination(this.jobs, this.windowSize);
    }
  }

  displayJob(index: number) {
    this.selectedJob = this.jobs[index].id;
  }

  filterTable(event: string) {
    const tablefilterParams = [
      'filter.price +',
      'filter.customer.first_name +',
      'filter.customer.email +',
      'filter.status +',
      'filter.customer.last_name +',
      'filter.intensity +',
      'filter.views'
    ];
    this.jobs = this.tableService.filterTable(event, this.jobs, this.allJobs, tablefilterParams);
    this.paginationService.setupPagination(this.jobs, this.windowSize);
  }

  ngOnDestroy() {
    this.clearJobSlideoverSubscription.unsubscribe();
  }
}
