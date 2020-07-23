import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {User} from '../../../utils/interfaces/models/User';
import {Application} from '../../../utils/interfaces/models/Application';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css']
})
export class ApplicantListComponent implements OnInit, DoCheck {
  @Input('applicants') applicants: Application[];
  activePage = 1;
  maxPages: number;
  maxPage: number;
  pagination: number[];
  windowSize = 5;
  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    if (this.applicants && this.windowSize) {
      this.maxPages = (this.applicants.length / this.windowSize) - ((this.applicants.length % this.windowSize) / this.windowSize);
      if (this.maxPages < 19) {
        this.pagination = Array(this.maxPages).fill(undefined).map((x, i) => i + 1);
        this.maxPage = this.maxPages;
      } else {
        this.setActivePage(1);
      }
    }
  }

  setPage($event) {
    console.log($event);
  }

  setActivePage(page: number) {
    this.activePage = page;
    if (this.maxPages > 19) {
      this.pagination = [1];
      const pages = 17;
      let maxPage = this.maxPages;
      let step = 9;
      if (this.applicants.length % 5 === 0) {
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

}
