import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {SettingsService} from './settings.service';
import {OnboardingForm} from '../interfaces/models/OnboardingForm';
import { NotyfService } from 'ng-notyf';
import { Response } from '../interfaces/responses/GenericResponse';
import { RESTService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class FormBuilderService extends RESTService {

  componentOptions = [];


  constructor(
    private settingsService: SettingsService,
    private notyfService: NotyfService,
    public http: HttpClient,
    public storage: Storage
    ) {
      super(http, storage);
     }

  deleteComponentFromArray = new Subject<number>();
  gatherComponentsOptions = new Subject<string>();


  organizeComponents(componentList: string[], formHeader: {formTitle: string, formDescription: string}) {

    const tempArr = [];

    if (!formHeader.formTitle.length || !formHeader.formDescription.length) {
      this.notyfService.error('Please provide a form title and description before submitting form');

    } else {
      for (let i = 0; i < componentList.length; i++) {
        for (let j = 0; j < this.componentOptions.length; j++) {
          if (this.componentOptions[j].index === i) {
          tempArr.push({component: componentList[i], options: this.componentOptions[j]});
          }
        }
      }
      this.componentOptions = tempArr;
      const form: OnboardingForm = {
        formHeader,
        formComponents: tempArr
      };

      this.settingsService.updateApplicantForm(form)
      .then((res: Response<null>) => this.notyfService.success(res.message))
      .catch(err => this.notyfService.error('Error while submitting form'));

      this.componentOptions = [];
    }

  }

  getForm() {
    return this.makeHttpRequest('form', 'GET').then(res => res.toPromise());
  }

  // getUnreadNotifications(): Promise<Response<Notification[]>> {
  //   return this.makeHttpRequest<Response<Notification[]>>(`notifications/new`, 'GET')
  //     .then((res) => res.toPromise());
  // }



}
