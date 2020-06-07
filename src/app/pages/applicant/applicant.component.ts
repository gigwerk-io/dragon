import { Component, OnInit } from '@angular/core';
import {Application} from '../../utils/interfaces/models/Application';
import {ApplicantsService} from '../../utils/services/applicants.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {
  applicant: Application;
  constructor(private applicantService: ApplicantsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.applicantService.getApplicant(params['id']).then(res => {
        this.applicant = res.data;
      });
    });
  }

}
