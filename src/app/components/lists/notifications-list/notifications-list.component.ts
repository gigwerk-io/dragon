import { Component, OnInit, Input, DoCheck, OnChanges } from '@angular/core';
import { Notification } from '../../../utils/interfaces/models/Notification';
import { NotificationService } from '../../../utils/services/notification.service';
import { Events } from '../../../utils/services/events';
import { TableService } from '../../../utils/services/table.service';

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

  typeMap = {
    'JobNeedsAttentionNotification': 'fas fa-wrench',
    'JobRequestedNotification': 'fas fa-hand-paper'
  };



  constructor(
    private notificationsService: NotificationService,
    private events: Events,
    private tableService: TableService
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.notifications !== undefined) {
      this.parseTypes(this.notifications);
      this.allNotifications = this.notifications;
      this.setupPagination();

    }
  }

  parseTypes(list: any) {
    return list.map((el) => {
      el.type = el.type.substring((el.type.lastIndexOf('\\') + 1));
      return el;
    });
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

  markNotificationRead(id: string) {
    this.notificationsService.getSingleNotification(id).then(() => this.events.publish('notificationRead'));
  }


  filterTable(event: string) {
    const tablefilterParams = [
      'filter.data.title +',
      'filter.data.message'
    ];
    this.notifications = this.tableService.filterTable(event, this.notifications, this.allNotifications, tablefilterParams);
    this.activePage = 1;
  }

  getUnreadNotifications() {
    this.notifications = undefined;
    this.allNotifications = undefined;
    this.notificationsService.getUnreadNotifications().then((res) => {
      this.notifications = this.parseTypes(res.data);
      this.allNotifications = this.notifications;
      this.setupPagination();
    });
  }

  getAllNotifications() {
    this.notifications = undefined;
    this.allNotifications = undefined;
    this.notificationsService.getAllNotifications().then((res) => {
      this.notifications = this.parseTypes(res.data);
      this.allNotifications = this.notifications;
      this.setupPagination();

    });
  }

  getFilteredList(type: string) {
    this.notifications = undefined;
    this.notifications = this.allNotifications.filter(el => {
      return el.type === type;
    });
    this.setupPagination();
  }

  onFilterBy(value: string) {
    switch (value) {
      case 'all':
        this.getAllNotifications();
        break;
      case 'unread':
        this.getUnreadNotifications();
        break;
      case 'attention':
        this.getFilteredList('JobNeedsAttentionNotification');
        break;
      case 'requested':
        this.getFilteredList('JobRequestedNotification');
        break;
      default:
        break;
    }
  }

}
