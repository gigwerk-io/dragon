import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../../utils/services/settings.service';
import { MissingSteps } from '../../utils/interfaces/user/User';
import { NotificationService } from '../../utils/services/notification.service';
import { Events } from '../../utils/services/events';
import { Notification } from '../../utils/interfaces/models/Notification';
import { AuthenticationService } from '../../utils/services/authentication.service';
import { Storage } from '@ionic/storage';
import { StorageKeys } from '../../utils/interfaces/enum/constants';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit, DoCheck {
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
  @Input() pageTitle = '';
  notifications: Notification[] = [];
  badgeCount = '';

  userId: number;
  image: string;
  name: string;

  constructor(
    public router: Router,
    private storage: Storage,
    private authService: AuthenticationService,
    private settingsService: SettingsService,
    private notificationService: NotificationService,
    private events: Events,
  ) { }

  ngOnInit() {
    // this.settingsService.checkMissingSteps().then((steps) => {
    //   this.missingSteps = steps.data;
    //   // tslint:disable-next-line:max-line-length
    //   this.isMissingSteps = (!this.missingSteps.has_location || !this.missingSteps.has_workers || !this.missingSteps.has_stripe || !this.missingSteps.has_customers);
    // });

    this.notificationService.getUnreadNotifications().then(res => {
      this.badgeCount = res.data.length > 9 ? '9+' : String(res.data.length);
      this.notifications = res.data.length > 5 ? res.data.slice(0, 5) : res.data;

      // this.notifications = []
      // console.log('notifications', this.notifications)
    });
    this.getUser();
  } // end of onInit()

  markNotificationRead(id: string) {
    // marks notification as read on the backend
    this.notificationService.getSingleNotification(id).then(() => this.events.publish('notificationRead'));
    // this.settingsService.checkMissingSteps().then((steps) => {
    //   this.missingSteps = steps.data;
    // tslint:disable-next-line:max-line-length
    //   this.isMissingSteps = (!this.missingSteps.has_location || !this.missingSteps.has_workers || !this.missingSteps.has_stripe || !this.missingSteps.has_customers);
    // });
  }

  ngDoCheck() {
    // form a page title to display from a url: /my-page -> My Page
    this.pageTitle = this.router.url
      .split('/')
      .join('')
      .split('-')
      .reduce((tot, frag) => tot + ' ' + frag.charAt(0).toUpperCase() + frag.slice(1));

    this.pageTitle = this.pageTitle.charAt(0).toUpperCase() + this.pageTitle.slice(1);
  }

  getUser() {
    this.storage.get(StorageKeys.USER).then((user) => {
      this.userId = user.id;
      this.image = user.profile.image;
      this.name = user.first_name + ' ' + user.last_name;
    });
  }


  signOut() {
    this.authService.logout();
  }
}
