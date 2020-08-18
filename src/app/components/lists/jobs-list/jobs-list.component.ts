import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TableService } from '../../../utils/services/table.service';
import { MarketplaceJob } from '../../../utils/interfaces/models/MarketplaceJob';
import { PaginationService } from '../../../utils/services/pagination.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css'],
  providers: [PaginationService]
})
export class JobsListComponent implements OnInit, OnChanges {
  // tslint:disable-next-line: no-input-rename
  @Input('jobs') jobs: MarketplaceJob[];
  allJobs: MarketplaceJob[];
  windowSize = 5;

  constructor(
    private tableService: TableService,
    public paginationService: PaginationService
  ) { }

  ngOnInit() { }

  ngOnChanges() {
    if (this.jobs !== undefined) {
      this.allJobs = this.jobs;
      this.paginationService.setupPagination(this.jobs, this.windowSize);
    }
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
}
