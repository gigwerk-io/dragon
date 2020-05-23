import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../utils/services/people.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Storage } from '@ionic/storage';
import { Role, StorageKeys } from '../../utils/interfaces/storage/constants';
import { Organization } from '../../utils/interfaces/favr/Organization';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/utils/interfaces/user/User';
import { TimeAgoPipe } from 'time-ago-pipe';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [TimeAgoPipe]
})
export class ProfileComponent implements OnInit {

  showModal = false;
  organization: Organization;
  id: number;
  user: User;
  userProfileForm: FormGroup;
  Roles = [Role.VERIFIED_FREELANCER, Role.CUSTOMER, Role.PENDING_FREELANCER];
  isNotOrgAdmin: boolean;

  constructor(
    private peopleService: PeopleService,
    private storage: Storage,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastrService) { }

  ngOnInit() {
    this.spinner.show();
    this.storage.get(StorageKeys.ORGANIZATION)
      .then((org: Organization) => {
        console.log(org);
        this.organization = org;
        this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);

        this.isNotOrgAdmin = org.organization.organizer_id !== this.id;
        if (this.id) {
          this.initSingleUser();
        } else {
          this.router.navigateByUrl('/people');
          this.toast.error('There was an issue finding this user!', 'Error!');
        }
      });
  }

  initSingleUser() {
    this.peopleService.getSingleUser(this.id)
      .then(res => {
        let user = res.data;
        this.user = user;
        console.log('this is the user', this.user)
        console.log(user);
        this.userProfileForm = new FormGroup({
          first_name: new FormControl({ value: user.first_name, disabled: true }),
          last_name: new FormControl({ value: user.last_name, disabled: true }),
          username: new FormControl({ value: user.username, disabled: true }),
          role: new FormControl(user.role),
          email: new FormControl(user.email),
          description: new FormControl(user.profile.description)
        });
        this.spinner.hide();
      })
      .catch(error => {
        this.spinner.hide();
        this.toast.error(error.message, 'Error!');
      });
  }

}
