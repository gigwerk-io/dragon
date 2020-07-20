import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/utils/services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs;

  constructor(
    private jobsService: JobsService
  ) { }

  ngOnInit() {
    this.jobsService.getAllJobs().then(res => this.jobs = res.data);
  }

}
