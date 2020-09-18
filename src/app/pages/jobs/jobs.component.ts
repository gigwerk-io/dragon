import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/utils/services/jobs.service';
import {MarketplaceJob} from "../../utils/interfaces/models/MarketplaceJob";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs: MarketplaceJob[];
  activePage = 1;
  maxPages: number;
  maxPage: number;
  pagination: number[];
  windowSize = 5;

  constructor(
    private jobsService: JobsService
  ) { }

  ngOnInit() {
    this.getAllJobs();
  }

  getAllJobs(filter = 1) {
    return this.jobsService.getAllJobs(filter).then(res => {
      console.log(res.data);
      return this.jobs = res.data;
    });
  }

  tab(e) {
    this.jobs = undefined;
    this.getAllJobs(e);
  }

}
