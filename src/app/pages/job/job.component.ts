import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobsService } from '../../utils/services/jobs.service';
import { PeopleService } from '../../utils/services/people.service';
import { MarketplaceJob } from '../../utils/interfaces/models/MarketplaceJob';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TableService } from '../../utils/services/table.service';
import { User } from '../../utils/interfaces/models/User';
import { NgxSpinnerService } from 'ngx-spinner';

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
  images = [];
  assignedFreelancer = false;
  jobDetailsForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private jobsService: JobsService,
    private toast: ToastrService,
    private peopleService: PeopleService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private tableService: TableService
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.jobsService.getJob(params['id']).then(res => {
        this.job = res.data;
        this.setupImages();
        this.setupForm();
        this.checkForAssignedFreelancer(this.job.proposals);
      }).catch(() => {
        this.toast.error('Sorry this job doesn\'t exist.', 'Error!');
        this.router.navigateByUrl('/jobs');
      });
    });

    this.peopleService.getAllUsers().then(res => {
      this.freelancers = this.checkForProposedFreelancers(res.data, this.job.proposals)
        .filter(el => el.role === 'Verified Freelancer');
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




  onSubmit(): void {
    const form = this.jobDetailsForm.value;
    const formBody = {
      complete_before: form.complete_before.replace('T', ' '),
      description: form.description,
      street_address: form.location.street_address,
      city: form.location.city,
      state: form.location.state,
      zip: form.location.zip,
      intensity: form.intensity,
      price: form.price

    };
    if (this.jobDetailsForm.valid) {
      this.jobsService.updateJob(this.job.id, formBody).then(res => {
        this.toast.error('Job has been updated', 'Success');
      });
    }
  }


  checkForAssignedFreelancer(arr): void {
    if (arr.length && this.job.status === 'Approved') {
      arr.forEach((el, i) => this.assignedFreelancer = el.status === 'Approved' ? el : undefined);
    }
  }

  checkForProposedFreelancers(freelancers, proposals) {
    return freelancers.map(el => {
      proposals.map(pro => {
        el.proposed = pro.user.id === el.profile.id && pro.status !== 'Approved' ? true : false;
      });
      return el;
    });
  }

  proposeUser(user: User, i: number) {
    this.spinner.show();
    this.jobsService.assignWorker(this.job.id, { worker_id: user.profile.id }).then(res => {
      this.freelancers.forEach(x => x.proposed = x.proposed === true ? false : false);
      this.freelancers[i].proposed = true;
      this.ngOnInit();
      this.spinner.hide();
    });



  }


  searchUser(e: string): void {


    const tablefilterParams = [
      'filter.first_name +',
      'filter.last_name +',
      'filter.profile.description',
    ];
    this.freelancers = this.tableService.filterTable(e, this.freelancers, this.allFreelancers, tablefilterParams);
  }



}// end of component
