import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../../utils/services/settings.service';
import { MissingSteps } from '../../utils/interfaces/user/User';
import { NotificationService } from '../../utils/services/notification.service';
import { Notification } from '../../utils/interfaces/notification/Notification';
import { Events } from '../../utils/services/events';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  showSidebar = false;
  showNotifications = false;
  isMissingSteps = false;
  stepsKey = {
    workers: 'people',
    customers: 'people',
    stripe: 'settings',
    location: 'settings'
  };
  missingSteps: MissingSteps;
  showModal = false;
  notifications: Notification[];
  badgeCount = 999;


  constructor(
    private router: Router,
    private settingsService: SettingsService,
    private notificationService: NotificationService,
    private events: Events,

  ) {
  }

  ngOnInit() {
    this.settingsService.checkMissingSteps().then((steps) => {
      this.missingSteps = steps.data;
      // tslint:disable-next-line:max-line-length
      this.isMissingSteps = (!this.missingSteps.has_location || !this.missingSteps.has_workers || !this.missingSteps.has_stripe || !this.missingSteps.has_customers);
    });

    this.notificationService.getUnreadNotifications().then(res => {
      this.badgeCount = res.data.length;
      this.notifications = res.data.length > 5 ? res.data.slice(0, 5) : res.data;
    });
  } // end of onInit()

  markNotificationRead(id: string) {
    // marks notification as read on the backend
    this.notificationService.getSingleNotification(id).then((notification) => this.events.publish('notificationRead'));
  }
}
