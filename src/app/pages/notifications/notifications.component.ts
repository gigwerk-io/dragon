import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/utils/services/notification.service';
import { Notification } from '../../utils/interfaces/models/Notification';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications: Notification[];

  constructor(
    private notificationsService: NotificationService
  ) { }

  ngOnInit() {
    this.notificationsService.getAllNotifications().then(res => this.notifications = res.data);
  }

}
