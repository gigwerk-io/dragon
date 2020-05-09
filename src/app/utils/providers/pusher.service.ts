import {HttpClient} from '@angular/common/http';
import {Injectable, OnDestroy, OnInit} from '@angular/core';
import Pusher from 'pusher-js';
import {environment} from '../../../environments/environment';
import {Storage} from '@ionic/storage';
import {StorageKeys} from '../interfaces/storage/constants';
import {ToastrService} from 'ngx-toastr';
import {PusherNotification} from '../interfaces/notification/PusherNotification';
import {Router} from '@angular/router';

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
          Authorization: credentials.authToken
        },
        params: {}
      }
    });
    return pusher.subscribe('private-organization.' + credentials.uuid);
  }

  public lstenToNotifications() {
    this.getCredentials().then(res => {
      const pusher = new Pusher(environment.pusherId, {
        cluster: 'us2',
        forceTLS: true,
        authEndpoint: `${environment.apiUrl}/broadcasting/auth`,
        auth: {
          headers: {
            Authorization: res.authToken
          },
          params: {}
        }
      });
      this.channel = pusher.subscribe('private-organization.' + res.uuid);
      this.channel.bind_global((eventName, data: PusherNotification) => {
        if (data.message != null && data.title != null) {
          this.toast.info(data.message, data.title).onTap.subscribe(response => {
            this.router.navigateByUrl(`${data.page}/${data.params}`);
          });
        }
      });
    });
  }

  public async getCredentials() {
    let authToken: string, uuid: string;
    return this.storage.get(StorageKeys.ACCESS_TOKEN).then((token) => {
      authToken = token;
      return this.storage.get(StorageKeys.ORGANIZATION).then(organization => {
        uuid = organization.organization.unique_id;
        return {authToken: authToken, uuid: uuid};
      });
    });
  }
}
