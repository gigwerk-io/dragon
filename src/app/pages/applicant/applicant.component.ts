import { Component, OnInit } from '@angular/core';
import { Application } from '../../utils/interfaces/models/Application';
import { ApplicantsService } from '../../utils/services/applicants.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {
  applicant: Application;
  status: string;
  constructor(
    private applicantService: ApplicantsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.applicantService.getApplicant(params['id']).then(res => {
        this.applicant = res.data;
        this.status = res.data.status.name;
      });
    });
  }

  ApproveOrReject(type: string, id: number): void {
    if (type === 'approve') {
      this.applicantService.ApproveApplicant(id).then(res => this.status = 'Approved');
    } else {
      this.applicantService.rejectApplicant(id).then(res => this.status = 'Rejected');
    }
  }

}
