import {HttpClient} from '@angular/common/http';
import {Injectable, OnDestroy, OnInit} from '@angular/core';
import Pusher from 'pusher-js';
import {environment} from '../../../environments/environment';
import {Storage} from '@ionic/storage';
import {StorageKeys} from '../interfaces/enum/constants';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {PusherNotification} from '../interfaces/models/PusherNotification';
import {Business} from '../interfaces/models/Business';

@Injectable()
export class PusherServiceProvider implements OnInit, OnDestroy {
  channel;

  constructor(public http: HttpClient, private storage: Storage, private toast: ToastrService, private router: Router) {
  }

  ngOnDestroy(): void {
    this.channel.unsubscribe();
  }

  ngOnInit(): void {
  }

  public async listenToNotifications() {
    const credentials = await this.getCredentials();
    const pusher = new Pusher(environment.pusherId, {
      cluster: 'us2',
      forceTLS: true,
      authEndpoint: `${environment.apiUrl}/broadcasting/auth`,
      auth: {
        headers: {
          Authorization: 'Bearer ' + credentials.authToken
        },
        params: {}
      }
    });
    return pusher.subscribe('private-organization.' + credentials.uuid);
  }

  public async getCredentials() {
    let authToken: string, uuid: string;
    return this.storage.get(StorageKeys.ACCESS_TOKEN).then((token: string) => {
      authToken = token;
      return this.storage.get(StorageKeys.SELECTED_BUSINESS).then((business: Business) => {
        uuid = business.unique_id;
        return {authToken: authToken, uuid: uuid};
      });
    });
  }
}
