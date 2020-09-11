import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.css']
})
export class SettingsMenuComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  active() {
    // tslint:disable-next-line:max-line-length
    return `border-l-4 border-primary-dominant text-md font-semibold text-primary-dominant hover:text-primary-hover`;
  }

  inactive() {
    return `text-sm font-medium text-gray-900 hover:text-primary-hover`;
  }
}
