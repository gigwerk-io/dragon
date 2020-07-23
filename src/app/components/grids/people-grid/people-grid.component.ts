import {Component, OnInit, Input, DoCheck} from '@angular/core';
import { User } from '../../../utils/interfaces/models/User';
import { TableService } from '../../../utils/services/table.service';

@Component({
  selector: 'app-people-grid',
  templateUrl: './people-grid.component.html',
  styleUrls: ['./people-grid.component.css']
})
export class PeopleGridComponent implements OnInit, DoCheck {

  // tslint:disable-next-line: no-input-rename
  @Input('people') people: User[];
  allPeople: User[];

  activePage = 1;
  maxPages: number;
  maxPage: number;
  pagination: number[];
  windowSize = 12;


  constructor(
    private tableService: TableService
  ) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.allPeople = this.people;
    if (this.people && this.windowSize) {
      this.maxPages = (this.people.length / this.windowSize) - ((this.people.length % this.windowSize) / this.windowSize) + 1;
      this.setupPagination();
    }
  }

  setupPagination(): void {
    if (this.maxPages < 19) {
      this.pagination = Array(this.maxPages).fill(undefined).map((x, i) => i + 1);
      this.maxPage = this.maxPages;
    } else {
      this.setActivePage(1);
    }
  }

  setActivePage(page: number): void {
    this.activePage = page;
    if (this.maxPages > 19) {
      this.pagination = [1];
      const pages = 17;
      let maxPage = this.maxPages;
      let step = 9;
      if (this.people.length % 5 === 0) {
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
    this.people = this.tableService.filterPeopleGrid(event, this.people, this.allPeople);
    this.activePage = 1;
  }

}
