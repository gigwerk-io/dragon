import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-arrow-percentage',
  templateUrl: './arrow-percentage.component.html',
  styleUrls: ['./arrow-percentage.component.css']
})
export class ArrowPercentageComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('diff') diff: number;
  constructor() { }

  ngOnInit() {
  }

}
