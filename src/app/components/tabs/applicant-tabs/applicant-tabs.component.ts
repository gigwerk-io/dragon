import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApplicationStatuses} from '../../../utils/interfaces/enum/ApplicationStatuses';
@Component({
  selector: 'app-applicant-tabs',
  templateUrl: './applicant-tabs.component.html',
  styleUrls: ['./applicant-tabs.component.css']
})
export class ApplicantTabsComponent implements OnInit {
  statuses = ApplicationStatuses;
  @Output() tab = new EventEmitter<string>();
  selected = 1;
  constructor() { }

  ngOnInit() {}

  changeTab(tab) {
    this.selected = tab;
    this.tab.emit(tab);
  }

  foop(e) {
    console.log(e.target.value);
  }
}
