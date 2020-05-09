import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedComponentService {

  public toggleSidebar: EventEmitter<boolean> = new EventEmitter();

  constructor() { }
}
