import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent implements OnInit {
  @Input() show: boolean;
  constructor(public router: Router) { }

  ngOnInit() {
  }

  active() {
    // tslint:disable-next-line:max-line-length
    return `text-primary-dominant border-primary-dominant bg-green-50 focus:text-primary-active focus:bg-green-100 focus:border-primary-active`;
  }

  inactive() {
    // tslint:disable-next-line:max-line-length
    return `border-transparent focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-primary-hover`;
  }
}
