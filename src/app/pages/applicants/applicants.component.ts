import { Component, OnInit } from '@angular/core';
import { ApplicantsService } from '../../utils/services/applicants.service';
import { User } from '../../utils/interfaces/models/User';
import { Application } from '../../utils/interfaces/models/Application';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent implements OnInit {
  applicants: Application[];
  activePage = 1;
  maxPages: number;
  maxPage: number;
  pagination: number[];
  windowSize = 5;
  constructor(private applicantService: ApplicantsService) { }

  ngOnInit() {
    this.getApplicants();
  }

  getApplicants() {
    this.applicantService.getApplicants().then(res => {
      this.applicants = res.data;
    });
  }

}
