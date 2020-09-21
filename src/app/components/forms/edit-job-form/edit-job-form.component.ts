import {Component, Input, OnInit, Output, EventEmitter, OnChanges} from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotyfService } from 'ng-notyf';
import { UpdateJobRequest } from 'src/app/utils/interfaces/requests/UpdateJobRequest';
import { MarketplaceJob } from '../../../utils/interfaces/models/MarketplaceJob';
import { JobsService } from 'src/app/utils/services/jobs.service';
import { Categories } from '../../../utils/interfaces/enum/Categories';
import { states } from '../../../utils/interfaces/enum/States';
import { JobIntensities } from '../../../utils/interfaces/enum/JobIntensities';

@Component({
  selector: 'app-edit-job-form',
  templateUrl: './edit-job-form.component.html',
  styleUrls: ['./edit-job-form.component.css']
})
export class EditJobFormComponent implements OnInit, OnChanges {
  @Input() job: MarketplaceJob|null;
  @Output() submitted = new EventEmitter<boolean>();
  updateJobRequest: UpdateJobRequest = {
    description: undefined,
     complete_before: undefined,
     street_address: undefined,
     city: undefined,
     state: 'MN',
     zip: undefined,
     client_name: undefined,
     price: undefined,
     category_id: 1,
     intensity_id: 1
  }

  states = states;
  categories = Categories;
  intensities = JobIntensities;

  constructor(private notyfService: NotyfService, public jobsService: JobsService) { }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.job != null) {
      this.buildForm();
    }
  }

  buildForm() {
    this.updateJobRequest.description = this.job.description;
    this.updateJobRequest.complete_before = this.job.complete_before.replace(' ', 'T');
    this.updateJobRequest.street_address = this.job.location.street_address;
    this.updateJobRequest.city = this.job.location.city;
    this.updateJobRequest.state = this.job.location.state;
    this.updateJobRequest.zip = String(this.job.location.zip);
    this.updateJobRequest.client_name = this.job.client_name;
    this.updateJobRequest.price = String(this.job.price);
    this.updateJobRequest.category_id = this.job.category_id;
    this.updateJobRequest.intensity_id = this.job.intensity_id;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.jobsService.updateJob(this.job.id, this.updateJobRequest).then(res => {
        this.notyfService.success(res.message);
        this.submitted.emit(true);
      }).catch((err) => this.notyfService.error('Could not update job. Please check that the form is correct'));
    } else {
      this.notyfService.error('Form is not valid');
    }


  }
}
