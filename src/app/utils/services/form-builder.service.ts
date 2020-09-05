import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RESTService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class FormBuilderService extends RESTService {

  componentOptions = [];


  constructor(
    public http: HttpClient,
    public storage: Storage
  ) {
    super(http, storage);
   }

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
    // tempArr.push(formHeader);
    this.componentOptions = tempArr;
    this.saveForm(formHeader)
  }

  saveForm(formHeader: {formTitle: string, formDescription: string}) {
    return this.makeHttpRequest(`drag-drop-form`, 'POST', {form: this.componentOptions, formHeader})
    .then(res => res.toPromise().then(res => console.log('response', res)));
  }

  // getJob(id: number): Promise<Response<MarketplaceJob>> {
  //   return this.makeHttpRequest<Response<MarketplaceJob>>(`job/${id}`, `GET`)
  //     .then((res) => res.toPromise());
  // }



}
