import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SettingsService } from './settings.service';
import { OnboardingForm, OnboardingFormComponent, OnboardingFormHeader } from '../interfaces/models/OnboardingForm';
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
  form: OnboardingFormComponent[];
  formHeader: OnboardingFormHeader;


  constructor(
    private settingsService: SettingsService,
    private notyfService: NotyfService,
    public http: HttpClient,
    public storage: Storage,
  ) {
    super(http, storage);
    if (this.form === undefined || this.formHeader === undefined) {
      this.settingsService.getApplicantForm().then((res: Response<OnboardingForm>) => {
        this.form = res.data.formComponents;
        console.log('form', this.form)
        this.formHeader = res.data.formHeader;
      });
    }
  }

  deleteComponentFromArray = new Subject<number>();
  gatherComponentsOptions = new Subject<string>();


  organizeComponents(componentList: string[], formHeader: { formTitle: string, formDescription: string }) {

    const tempArr = [];

    if (!formHeader.formTitle.length || !formHeader.formDescription.length) {
      this.notyfService.error('Please provide a form title and description before submitting form');

    } else {
      for (let i = 0; i < componentList.length; i++) {
        for (let j = 0; j < this.componentOptions.length; j++) {
          if (this.componentOptions[j].index === i) {
            tempArr.push({ component: componentList[i], options: this.componentOptions[j] });
          }
        }
      }
      this.componentOptions = tempArr;
      const form: OnboardingForm = {
        formHeader,
        formComponents: tempArr
      };

      this.settingsService.updateApplicantForm(form)
        .then((res: Response<null>) => {
          this.notyfService.success(res.message);
          this.formHeader = form.formHeader;
          this.form = form.formComponents;

        })
        .catch(err => this.notyfService.error('Error while submitting form'));

      this.componentOptions = [];
    }

  }

  setOptions(settings, defaultSettings) {
    return settings !== undefined ? settings : defaultSettings;
  }



}
