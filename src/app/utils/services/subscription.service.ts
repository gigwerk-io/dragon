import { Injectable } from '@angular/core';
import { RESTService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import {Response} from "../interfaces/responses/GenericResponse";


@Injectable({
  providedIn: 'root'
})
export class SubscriptionService extends RESTService {

  subscriptionMap = {
    'Basic Plan': 'price_1GxacvD2YnIDoaEIvDuZUD5W',
    'Pro Plan': 'price_1GxadxD2YnIDoaEI8iOxwkI9',
    'Enterprise Plan': 'price_1GyqM4D2YnIDoaEIXvGKWdiJ'
  };

  constructor(
    public http: HttpClient,
    public storage: Storage
  ) {
    super(http, storage);
  }

  getSubscription() {
    return this.makeHttpRequest<Response<any>>('subscription', 'GET')
      .then((res) => res.toPromise());
  }


  changeSubscription(id: string) {
    return this.makeHttpRequest<Response<any>>('subscription', 'PATCH', { subscription_id: this.subscriptionMap[id] })
      .then((res) => res.toPromise());
  }

}
