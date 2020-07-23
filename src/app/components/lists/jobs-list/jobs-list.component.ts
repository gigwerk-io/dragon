import {Component, OnInit, Input, DoCheck} from '@angular/core';
import { TableService } from '../../../utils/services/table.service';
import { MarketplaceJob } from '../../../utils/interfaces/models/MarketplaceJob';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit, DoCheck {


  // tslint:disable-next-line: no-input-rename
  @Input('jobs') jobs: MarketplaceJob[];
  allJobs: MarketplaceJob[];

  activePage = 1;
  maxPages: number;
  maxPage: number;
  pagination: number[];
  windowSize = 5;

  constructor(
    private tableService: TableService
  ) { }

  ngOnInit() {}

  ngDoCheck() {
    this.allJobs = this.jobs;
    this.setupPagination();
  }

  setupPagination(): void {
    if (this.jobs && this.windowSize) {
      this.maxPages = (this.jobs.length / this.windowSize) - ((this.jobs.length % this.windowSize) / this.windowSize);
      if (this.maxPages < 19) {
        this.pagination = Array(this.maxPages).fill(undefined).map((x, i) => i + 1);
        this.maxPage = this.maxPages;
      } else {
        this.setActivePage(1);
      }
    }
  }

  setActivePage(page: number) {
    this.activePage = page;
    if (this.maxPages > 19) {
      this.pagination = [1];
      const pages = 17;
      let maxPage = this.maxPages;
      let step = 9;
      if (this.jobs.length % 5 === 0) {
        maxPage -= 1;
      }
      const centeredRange = Array(pages).fill(undefined)
        .map(() => {
          const i = page + step;
          if (step > 0) {
            step -= 1;
          } else if (step === 0) {
            step = -7;
          } else if (i < maxPage) {
            step += 1;
          }

          if (i > 1 && i < maxPage) {
            return i;
          }

          return undefined;
        });
      this.pagination.push(...centeredRange.sort((a, b) => a - b).filter(i => i !== undefined));
      this.pagination.push(maxPage);
      this.maxPage = maxPage;
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
  }

}
