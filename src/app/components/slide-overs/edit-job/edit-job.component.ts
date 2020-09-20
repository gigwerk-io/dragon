import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotyfService } from 'ng-notyf';
import { Categories } from 'src/app/utils/interfaces/enum/Categories';
import { JobIntensities } from 'src/app/utils/interfaces/enum/JobIntensities';
import { states } from 'src/app/utils/interfaces/enum/States';
import { MarketplaceJob } from 'src/app/utils/interfaces/models/MarketplaceJob';
import { CreateJobRequest } from 'src/app/utils/interfaces/requests/CreateJobRequest';
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

   job: MarketplaceJob;

   // FORM
   states = states;
   categories = Categories;
   intensities = JobIntensities;
   createJobRequest: CreateJobRequest = {
     description: undefined,
     complete_before: undefined,
     street_address: undefined,
     city: undefined,
     state: 'MN',
     zip: undefined,
     client_name: undefined,
     price: undefined,
     image_one: undefined,
     image_two: undefined,
     image_three: undefined,
     category_id: 1,
     intensity_id: 1
   };

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

  buildForm() {
    console.log('building form');
    this.createJobRequest.description = this.job.description;
    this.createJobRequest.complete_before = this.job.complete_before.replace(' ', 'T');
    this.createJobRequest.street_address = this.job.location.street_address;
    this.createJobRequest.city = this.job.location.city;
    this.createJobRequest.state = this.job.location.state;
    this.createJobRequest.zip = String(this.job.location.zip);
    this.createJobRequest.client_name = this.job.client_name;
    this.createJobRequest.price = String(this.job.price);
    this.createJobRequest.image_one = this.job.image_one;
    this.createJobRequest.image_two = this.job.image_two;
    this.createJobRequest.image_three = this.job.image_three;
    this.createJobRequest.category_id = this.job.category_id;
    this.createJobRequest.intensity_id = this.job.intensity_id;
  }

 

  getJob() {
    this.jobsService.getJob(this.jobID).then((res) => {
      this.job = res.data;
      console.log('job', this.job);
      this.buildForm();

    });
  }

  onSubmit(form: NgForm) {
    console.log('form', form.value)

    // if (form.valid) {
    //   this.jobsService.createJob(this.createJobRequest).then(res => {
    //     setTimeout(() => {
    //       this.notyfService.success(res.message);
    //     }, 1000);
    //   }).catch(err => {
    //     console.log(err);
    //     this.notyfService.error(err.error.message);
    //   });
    // } else {
    //   console.log('form not valid', form);
    // }
  }

  clear() {
    setTimeout(() => this.openSlider = false, 50);
    setTimeout(() => this.showPage = false, 600);
    this.jobsService.clearJobSliderover.next();
  }

}
