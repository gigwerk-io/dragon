import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/utils/services/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications;

  constructor(
    private notificationsService: NotificationService
  ) { }

  ngOnInit() {
    this.notificationsService.getAllNotifications().then(res => {
      console.log('res', res)
    })
  }

}
