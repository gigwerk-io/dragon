import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { states } from 'src/app/utils/interfaces/enum/States';
import { JobsService } from '../../../utils/services/jobs.service';
import { CreateJobRequest } from '../../../utils/interfaces/requests/CreateJobRequest';
import { JobIntensities } from '../../../utils/interfaces/enum/JobIntensities';
import { NotyfService } from 'ng-notyf';
import { error } from 'util';
import { Categories } from 'src/app/utils/interfaces/enum/Categories';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<boolean>();
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
  constructor(private jobsService: JobsService, private notyfService: NotyfService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.jobsService.createJob(this.createJobRequest).then(res => {
        setTimeout(() => {
          this.notyfService.success(res.message);
        }, 1000);
        this.submitted.emit(true);
      }).catch(err => {
        console.log(err);
        this.notyfService.error(err.error.message);
      });
    } else {
      console.log(form);
    }
  }
}
