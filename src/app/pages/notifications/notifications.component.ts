import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/utils/services/notification.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Events } from '../../utils/services/events';
import { Response } from '../../utils/interfaces/responses/GenericResponse';
import { Notification } from '../../utils/interfaces/models/Notification';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {


  // tslint:disable-next-line:no-input-rename
  activePage = 1;
  maxPages: number;
  maxPage: number;
  pagination: number[];
  windowSize = 8;

  typeMap = {
    'JobNeedsAttentionNotification': 'fas fa-wrench',
    'JobRequestedNotification': 'fas fa-hand-paper'
  };


  allNotifications: Notification[];
  showModal = false;
  unreadNotifications: Notification[];
  notifications: Notification[];

  constructor(
    private notificationsService: NotificationService,
    private ngxSpinner: NgxSpinnerService,
    private events: Events,
  ) { }

  ngOnInit() {
    this.ngxSpinner.show();
    this.getAllNotifications();
  }

  getAllNotifications() {
    this.notificationsService.getAllNotifications().then((res: Response<Notification[]>) => {
      this.ngxSpinner.hide();
      this.notifications = this.parseTypes(res.data);
      this.allNotifications = this.notifications;
      this.setUpPagination();
      console.log('res', res)
    });
  }

  getUnreadNotifications() {
    this.notificationsService.getUnreadNotifications().then((res: Response<Notification[]>) => {
      this.ngxSpinner.hide();
      this.notifications = this.parseTypes(res.data);
      this.setUpPagination();
    });
  }

  getFilteredList(type: string) {
    this.notifications = this.allNotifications.filter(el => {
      return el.type === type;
    });
    this.setUpPagination();
    this.ngxSpinner.hide();
  }

  setUpPagination() {
    this.maxPages = (this.notifications.length / this.windowSize) - ((this.notifications.length % this.windowSize) / this.windowSize);
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
    this.notificationsService.getSingleNotification(id).then((notification) => this.events.publish('notificationRead'));
  }

  parseTypes(list: any) {
    return list.map((el) => {
      el.type = el.type.substring((el.type.lastIndexOf('\\') + 1));
      return el;
    });
  }


  onFilterBy(value) {

    this.ngxSpinner.show();
    switch (value.target.value) {
      case 'all notifications':
        this.getAllNotifications();
        break;
      case 'unread':
        this.getUnreadNotifications();
        break;
      case 'job Needs Attention':
        this.getFilteredList('JobNeedsAttentionNotification');
        break;
      case 'Job Requested':
        this.getFilteredList('JobRequestedNotification');
        break;
      default:
        break;
    }

  }
}
