import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor() { }

  deleteComponentFromArray = new Subject<number>();



}
