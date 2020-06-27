import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobsService } from '../../utils/services/jobs.service';
import { PeopleService } from '../../utils/services/people.service';
import { MarketplaceJob } from '../../utils/interfaces/models/MarketplaceJob';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TableService } from '../../utils/services/table.service';
import { User } from '../../utils/interfaces/models/User';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  freelancers: User[] = [];
  allFreelancers: User[] = [];
  showModal = false;
  job: MarketplaceJob;
  images = [
    'https://blog.fantasticservices.com/wp-content/uploads/2020/01/lawn-mowing.jpg',
    'https://www.house-painting-info.com/wp-content/uploads/2017/12/74d1413e960c3c315c1aca8e3d050baf.jpg',
    'https://blog.fantasticservices.com/wp-content/uploads/2020/01/lawn-mowing.jpg',

  ];
  jobDetailsForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private jobsService: JobsService,
    private toast: ToastrService,
    private peopleService: PeopleService,
    private router: Router,
    private tableService: TableService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.jobsService.getJob(params['id']).then(res => {
        this.job = res.data;
        // this.setupImages();
        this.setupForm();
      }).catch(() => {
        this.toast.error('Sorry this job doesn\'t exist.', 'Error!');
        this.router.navigateByUrl('/jobs');
      });
    });

    this.peopleService.getAllUsers().then(res => {
      this.freelancers = res.data.filter(el => el.role === 'Verified Freelancer');
      this.allFreelancers = this.freelancers;

    });
  }

  // ============================
  //        SETUP METHODS
  // ============================

  setupForm() {
    this.jobDetailsForm = new FormGroup({
      description: new FormControl(this.job.description, [Validators.required]),
      intensity: new FormControl(this.job.intensity, [Validators.required]),
      complete_before: new FormControl(this.job.complete_before.replace(' ', 'T'), [Validators.required]),
      email: new FormControl(this.job.customer.email, [Validators.required]),
      price: new FormControl(this.job.price, [Validators.required]),
      location: new FormGroup({
        street_address: new FormControl(this.job.location.street_address, [Validators.required]),
        city: new FormControl(this.job.location.city, [Validators.required, Validators.minLength(2)]),
        state: new FormControl(this.job.location.state, [Validators.required]),
        zip: new FormControl(this.job.location.zip, [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
      }),
    });
  }

  setupImages() {
    // tslint:disable-next-line: no-unused-expression
    typeof this.job.image_one === 'string' ? this.images.push(this.job.image_one) : null;
    // tslint:disable-next-line: no-unused-expression
    typeof this.job.image_two === 'string' ? this.images.push(this.job.image_two) : null;
    // tslint:disable-next-line: no-unused-expression
    typeof this.job.image_three === 'string' ? this.images.push(this.job.image_three) : null;
  }




  onSubmit() {
    const form = this.jobDetailsForm.value;
    const formBody = {
      complete_before: form.complete_before.replace('T', ' '),
      description: form.description,
      street_address: form.location.street_address,
      city: form.location.city,
      state: form.location.state,
      zip: form.location.zip
    };
    if (this.jobDetailsForm.valid) {
      this.jobsService.updateJob(this.job.id, formBody).then(res => {
        this.toast.error('Job has been updated', 'Success');
      });
    }
  }

  searchUser(e: string) {
    this.freelancers = this.tableService.FilterFreelancer(e, this.freelancers, this.allFreelancers);
  }



}// end of component
