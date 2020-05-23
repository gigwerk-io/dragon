import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../utils/interfaces/User';

@Component({
  selector: 'app-leaderboard-list',
  templateUrl: './leaderboard-list.component.html',
  styleUrls: ['./leaderboard-list.component.css']
})
export class LeaderboardListComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('topWorkers') topWorkers: User[];
  activePage = 1;
  maxPages: number;
  maxPage: number;
  pagination: number[];
  windowSize = 5;

  constructor() {
  }

  ngOnInit() {
    this.maxPages = (this.topWorkers.length / this.windowSize) - ((this.topWorkers.length % this.windowSize) / this.windowSize);
    if (this.maxPages < 19) {
      this.pagination = Array(this.maxPages).fill(undefined).map((x, i) => i + 1);
      this.maxPage = this.maxPages;
    } else {
      this.setActivePage(1);
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
      if (this.topWorkers.length % 5 === 0) {
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
