import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {SettingsService} from './settings.service';
import {OnboardingForm} from '../interfaces/models/OnboardingForm';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  componentOptions = [];


  constructor(private settingsService: SettingsService) { }

  deleteComponentFromArray = new Subject<number>();
  gatherComponentsOptions = new Subject<string>();


  organizeComponents(componentList: string[], formHeader: {formTitle: string, formDescription: string}) {

    const tempArr = [];

    for (let i = 0; i < componentList.length; i++) {
      for (let j = 0; j < this.componentOptions.length; j++) {
        if (this.componentOptions[j].index === i) {
        tempArr.push({component: componentList[i], options: this.componentOptions[j]});
        }
      }
    }
    tempArr.push(formHeader);
    this.componentOptions = tempArr;
    const form: OnboardingForm = {
      formHeader,
      formComponents: tempArr
    };

    this.settingsService.updateApplicantForm(form).then(res => {
      console.log(res);
    }).catch(err => console.log(err));

    this.componentOptions = [];

  }



}
