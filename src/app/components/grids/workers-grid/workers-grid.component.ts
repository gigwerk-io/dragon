import { Component, OnInit, Input, DoCheck, OnChanges } from '@angular/core';
import { User } from '../../../utils/interfaces/models/User';
import { TableService } from '../../../utils/services/table.service';
import { PaginationService } from '../../../utils/services/pagination.service';

@Component({
  selector: 'app-workers-grid',
  templateUrl: './workers-grid.component.html',
  styleUrls: ['./workers-grid.component.css'],
  providers: [PaginationService]
})
export class WorkersGridComponent implements OnInit, OnChanges {

  // tslint:disable-next-line: no-input-rename
  @Input('workers') workers: User[];
  allWorkers: User[];
  profileUserID = undefined;

  windowSize = 16;


  constructor(
    private tableService: TableService,
    public paginationService: PaginationService
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.workers !== undefined) {
      this.allWorkers = this.workers;
      console.log('workers', this.workers[0])
      this.paginationService.setupPagination(this.workers, this.windowSize);
    }
  }

  filterTable(event: string) {
    const tablefilterParams = [
      'filter.first_name +',
      'filter.last_name +',
      'filter.role'
    ];
    this.workers = this.tableService.filterTable(event, this.workers, this.allWorkers, tablefilterParams);
    this.paginationService.setupPagination(this.workers, this.windowSize);
  }


  viewProfile(userID: number) {
    this.profileUserID = userID;
  }

}
