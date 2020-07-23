import {Injectable} from '@angular/core';
import {RESTService} from './rest.service';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {Observable} from 'rxjs';
import {Response} from '../interfaces/responses/GenericResponse';
import {Notification} from '../interfaces/models/Notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends RESTService {

  constructor(http: HttpClient, storage: Storage) {
    super(http, storage);
  }

  getAllNotifications(): Promise<Response<Notification[]>> {
    return this.makeHttpRequest<Response<Notification[]>>(`notifications/all`, 'GET')
      .then((res) => res.toPromise());
  }

  getUnreadNotifications(): Promise<Response<Notification[]>> {
    return this.makeHttpRequest<Response<Notification[]>>(`notifications/new`, 'GET')
      .then((res) => res.toPromise());
  }

  markAllAsRead() {

  }

  getSingleNotification(id): Promise<Response<Notification>> {
    return this.makeHttpRequest<Response<Notification>>(`notification/${id}`, 'GET')
      .then((res) => res.toPromise());
  }
}
