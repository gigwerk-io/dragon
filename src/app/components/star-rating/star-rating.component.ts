import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('rating') rating: number;
  constructor() { }

  ngOnInit() {
  }

}
