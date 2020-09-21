import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { NotyfService } from 'ng-notyf';
import { MarketplaceJob } from 'src/app/utils/interfaces/models/MarketplaceJob';
import { JobsService } from 'src/app/utils/services/jobs.service';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit, OnChanges {

  openSlider = false;
  showPage = false;
   // tslint:disable-next-line: no-input-rename
   @Input('jobID') jobID: number;

  // initalize job (if null, skeleton text will load in form component.)
   job: MarketplaceJob|null = null;

  constructor(
    public jobsService: JobsService,
    private notyfService: NotyfService
  ) { }

  ngOnInit() {}

  ngOnChanges() {
    if (this.jobID !== undefined) {
      this.showPage = true;
      this.getJob();
      setTimeout(() => this.openSlider = true, 50);
    }
  }

  getJob() {
    this.jobsService.getJob(this.jobID).then((res) => {
      this.job = res.data;
    }).catch(() => {
      this.notyfService.error('Something went wrong');
      this.clear();
    });
  }

  clear() {
    setTimeout(() => this.openSlider = false, 50);
    setTimeout(() => this.showPage = false, 600);
    this.jobsService.clearJobSliderover.next();
  }

}
