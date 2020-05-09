import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  showSidebar = false;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.router.isActive('/settings', true));
  }
}
