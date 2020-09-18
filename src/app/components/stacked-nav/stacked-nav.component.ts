import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-stacked-nav',
  templateUrl: './stacked-nav.component.html',
  styleUrls: ['./stacked-nav.component.css']
})
export class StackedNavComponent implements OnInit {
  showJobSlideOver = false;
  showNotifications = false;
  showMobile = false;
  constructor(public router: Router) { }

  ngOnInit() {
  }

  active() {
    return `border-primary-dominant focus:border-primary-active text-gray-900`;
  }

  inactive() {
    // tslint:disable-next-line:max-line-length
    return `border-transparent hover:text-primary-hover hover:border-primary-hover text-gray-500 focus:text-gray-700 focus:border-gray-300`;
  }

  handleJobSlideOver($event) {
    this.showJobSlideOver = $event;
  }
}
