import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  activePage = 1;
  maxPages: number;
  maxPage: number;
  pagination: number[];

  constructor() { }

  setupPagination(list: any[], windowSize: number) {
    const maxPagesCalc = Math.round((list.length / windowSize) - ((list.length % windowSize) / windowSize));
    this.maxPages = (maxPagesCalc * windowSize) >= list.length ? maxPagesCalc : (maxPagesCalc + 1);
    if (this.maxPages < 19) {
      this.pagination = Array(this.maxPages).fill(undefined).map((x, i) => i + 1);
      this.maxPage = this.maxPages;
    } else {
      this.setActivePage(1, list);
    }
  }


  setActivePage(page: number, list?: any[]) {
    this.activePage = page;
    if (this.maxPages > 19) {
      this.pagination = [1];
      const pages = 17;
      let maxPage = this.maxPages;
      let step = 9;
      if (list.length % 5 === 0) {
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
