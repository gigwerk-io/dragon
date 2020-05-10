import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('activePage') activePage = 1;
  // tslint:disable-next-line:no-input-rename
  @Input('maxPages') maxPages: number;
  // tslint:disable-next-line:no-input-rename
  @Input('maxPage') maxPage: number;
  // tslint:disable-next-line:no-input-rename
  @Input('pagination') pagination: number[];
  // tslint:disable-next-line:no-input-rename
  @Input('windowSize') windowSize = 5;
  // tslint:disable-next-line:no-input-rename
  @Input('results') results: number;
  @Output() page = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  setPage(page: number) {
    this.page.emit(page);
  }
}
