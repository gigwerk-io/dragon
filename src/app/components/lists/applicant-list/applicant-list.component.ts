import { Component, DoCheck, Input, OnInit, OnChanges } from '@angular/core';
import { Application } from '../../../utils/interfaces/models/Application';
import { TableService } from '../../../utils/services/table.service';
import { PaginationService } from '../../../utils/services/pagination.service';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css'],
  providers: [PaginationService]
})
export class ApplicantListComponent implements OnInit, OnChanges {
  @Input() applicants: Application[];
  allApplicants: Application[];
  windowSize = 5;
  applicantID = undefined;
  constructor(
    private tableService: TableService,
    public paginationService: PaginationService
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.applicants !== undefined) {
      this.allApplicants = this.applicants;
      this.paginationService.setupPagination(this.applicants, this.windowSize);
    }
  }

  searchUser(e: string) {

    const tableFilterParams = [
      'filter.first_name +',
      'filter.customer.name +',
      'filter.customer.email'
    ];

    this.applicants = this.tableService.filterTable(e, this.applicants, this.allApplicants, tableFilterParams);
    this.paginationService.setupPagination(this.applicants, this.windowSize);
  }

}
