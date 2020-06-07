import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.css']
})
export class StatsCardComponent implements OnInit {
  @Input('title') title;
  @Input('value') value;
  @Input('href') href;
  constructor() { }

  ngOnInit() {
  }

}
