import { Component, OnInit, Input, DoCheck, OnChanges } from '@angular/core';
import { Notification } from '../../../utils/interfaces/models/Notification';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.css']
})
export class NotificationsListComponent implements OnInit, OnChanges {

  // tslint:disable-next-line: no-input-rename
  @Input('notifications') notifications: Notification[];
  allNotifications: Notification[];

  // Pagination setup
  activePage = 1;
  maxPages: number;
  maxPage: number;
  pagination: number[];
  windowSize = 4;


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.notifications !== undefined) {
      for (let index = 0; index < 40; index++) {
        this.notifications.push(this.notifications[0])
      }
      this.allNotifications = this.notifications;
      console.log('notigf', this.notifications)
      console.log(this.notifications[0].type.substring(this.notifications[0].type.lastIndexOf('\\') + 1))
      this.setupPagination();
    }

  }

  setupPagination(): void {
    if (this.notifications && this.windowSize) {
      this.maxPages = (this.notifications.length / this.windowSize) - ((this.notifications.length % this.windowSize) / this.windowSize);
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
      if (this.notifications.length % 5 === 0) {
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
