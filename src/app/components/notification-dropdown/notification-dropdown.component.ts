import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/utils/interfaces/models/Notification';
import { NotificationService } from 'src/app/utils/services/notification.service';

@Component({
  selector: 'app-notification-dropdown',
  templateUrl: './notification-dropdown.component.html'
})
export class NotificationDropdownComponent implements OnInit {

  notifications: Notification[] = [];

  constructor(
    public notificationService: NotificationService
  ) {

  }

  ngOnInit() {
    this.notificationService.getUnreadNotifications().then(res => {
      this.notifications = res.data;
      this.notifications = this.notifications.length > 4 ? this.notifications.slice(0, 4) : this.notifications;
      this.notificationService.isThereNewNotifications = this.notifications.length ? true : false;
    });
  }
}
