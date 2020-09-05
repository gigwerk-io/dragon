import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  componentOptions = [];


  constructor() { }

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

    console.log('This is what would be sent to the backend');
    console.log(this.componentOptions);

    this.componentOptions = [];

  }



}
