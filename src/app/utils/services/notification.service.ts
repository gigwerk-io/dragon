import { Injectable } from '@angular/core';
import { RESTService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/responses/GenericResponse';
import { Notification } from '../interfaces/models/Notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends RESTService {

  constructor(http: HttpClient, storage: Storage) {
    super(http, storage);
  }

  getAllNotifications(): Promise<Response<Notification[]>> {
    return this.makeHttpRequest(`user/notifications/all`, 'GET')
      .toPromise()
      .then((res) => res.toPromise());
  }

  getUnreadNotifications(): Promise<Response<Notification[]>> {
    return this.makeHttpRequest(`user/notifications/all`, 'GET')
      .toPromise()
      .then((res) => res.toPromise());
  }

  markAllAsRead() {

  }

  getSingleNotification(id): Promise<Notification> {
    return this.makeHttpRequest(`notification/${id}`, 'GET')
      .toPromise()
      .then((res) => res.toPromise());
  }
}
