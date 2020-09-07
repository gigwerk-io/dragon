import { Component, OnInit, Input, DoCheck, OnChanges } from '@angular/core';
import { User } from '../../../utils/interfaces/models/User';
import { TableService } from '../../../utils/services/table.service';
import { PaginationService } from '../../../../app/utils/services/pagination.service';

@Component({
  selector: 'app-people-grid',
  templateUrl: './people-grid.component.html',
  styleUrls: ['./people-grid.component.css'],
  providers: [PaginationService]
})
export class PeopleGridComponent implements OnInit, OnChanges {

  // tslint:disable-next-line: no-input-rename
  @Input('people') people: User[];
  allPeople: User[];
  profileUserID = undefined;

  windowSize = 12;


  constructor(
    private tableService: TableService,
    public paginationService: PaginationService
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.people !== undefined) {
      this.allPeople = this.people;
      this.paginationService.setupPagination(this.people, this.windowSize);
    }
  }

  filterTable(event: string) {
    const tablefilterParams = [
      'filter.first_name +',
      'filter.last_name +',
      'filter.role'
    ];
    this.people = this.tableService.filterTable(event, this.people, this.allPeople, tablefilterParams);
    this.paginationService.setupPagination(this.people, this.windowSize);
  }


  viewProfile(userID: number) {
    this.profileUserID = userID;
  }

}
