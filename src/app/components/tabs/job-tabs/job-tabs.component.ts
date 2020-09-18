import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {JobStatuses} from '../../../utils/interfaces/enum/JobStatuses';

@Component({
  selector: 'app-job-tabs',
  templateUrl: './job-tabs.component.html',
  styleUrls: ['./job-tabs.component.css']
})
export class JobTabsComponent implements OnInit {
  statuses = JobStatuses;
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
