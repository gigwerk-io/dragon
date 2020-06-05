import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../utils/services/people.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Storage } from '@ionic/storage';
import { Role, StorageKeys } from '../../utils/interfaces/storage/constants';
import { Organization } from '../../utils/interfaces/favr/Organization';
import { FormControl, FormGroup } from '@angular/forms';
import { User, GigwerkUser, Payment, MarketplaceProposal, MarketplaceJob } from 'src/app/utils/interfaces/user/User';
import { TimeAgoPipe } from 'time-ago-pipe';
import { filter } from 'rxjs/operators';
import { TableService } from '../../utils/services/table.service';
import { Response } from '../../utils/interfaces/api/GenericResponse';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [TimeAgoPipe]
})
export class ProfileComponent implements OnInit {

  activeClass = {
    pastPayouts: true,
    pastJobs: false,
    pastRequests: false
  };

  showModal = false;
  organization: Organization;
  id: number;
  user: GigwerkUser;
  userProfileForm: FormGroup;
  pastPayouts: Payment[];
  pastRequests: MarketplaceProposal[];
  pastJobs: MarketplaceJob[];
  currentTable: any;

  activePage = 1;
  windowSize = 5;
  maxPages: number;
  maxPage: number;
  pagination: number[];

  Roles = {
    1: 'Verified Freelancer',
    2: 'Pending Freelancer',
    3: 'Customer',
    4: 'Rejected Freelancer'
  };
  role: number;
  isNotOrgAdmin: boolean;

  constructor(
    private peopleService: PeopleService,
    private storage: Storage,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router,
    private tableService: TableService,
    private toast: ToastrService) { }

  ngOnInit() {
    this.spinner.show();
    this.storage.get(StorageKeys.SELECTED_BUSINESS)
      .then((org: Organization) => {
        this.organization = org;
        this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);

        this.isNotOrgAdmin = this.organization.owner_id !== this.id;
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
      .then((res: Response<GigwerkUser>) => {
        const user = res.data;
        this.user = user;
        this.pastPayouts = res.data.payouts;
        this.pastRequests = res.data.marketplace_proposals;
        this.pastJobs = res.data.marketplace_jobs;
        console.log('pastpayouts', this.pastRequests)


        this.setupTable(this.pastPayouts);
        this.currentTable = this.pastPayouts;


        this.role = this.user.pivot.role_id;
        this.userProfileForm = new FormGroup({
          first_name: new FormControl({ value: user.first_name, disabled: true }),
          last_name: new FormControl({ value: user.last_name, disabled: true }),
          username: new FormControl({ value: user.username, disabled: true }),
          role: new FormControl(user.pivot.role_id),
          email: new FormControl({ value: user.email, disabled: true }),
          description: new FormControl({ value: user.profile.description, disabled: true }),
          phone: new FormControl({ value: user.phone, disabled: true }),
          status: new FormControl({ value: user.isActive, disabled: true })
        });
        this.spinner.hide();
      })
      .catch(error => {
        this.spinner.hide();
        this.toast.error(error.message, 'Error!');
      });
  }

  setupTable(list: any) {
    this.maxPages = (list.length / this.windowSize) - ((list.length % this.windowSize) / this.windowSize);

    if (this.maxPages < 19) {
      this.pagination = Array(this.maxPages).fill(undefined).map((x, i) => i + 1);
      this.maxPage = this.maxPages;
    } else {
      this.setActivePage(1, list);
    }
  }

  onSubmit() {
    this.spinner.show();
    this.peopleService.changeUserRole(this.id, this.role).then(res => {
      this.spinner.hide();
      this.showModal = false;
    });
  }

  changeUserRole(e) {
    this.role = e.target.value;
  }

  removeUser() {

    this.peopleService.removeUser(this.id).then(res => {
      this.router.navigate(['/dashboard']);
    });
  }

  setActivePage(page: number, list: any) {
    this.activePage = page;
    if (this.maxPages > 19) {
      this.pagination = [1];
      const pages = 17;
      let maxPage: number = this.maxPages;
      let step = 9;
      if (list.length % 5 === 0) {
        maxPage -= 1;
      }
      const centeredRange = Array(pages).fill(undefined)
        .map(() => {
          const i = page + step;
          if (step > 0) {
            step -= 1;
          } else if (step === 0) {
            step = -7;
          } else if (i < maxPage) {
            step += 1;
          }

          if (i > 1 && i < maxPage) {
            return i;
          }

          return undefined;
        });
      this.pagination.push(...centeredRange.sort((a, b) => a - b).filter(i => i !== undefined));
      this.pagination.push(maxPage);
      this.maxPage = maxPage;
    }
  }

  selectPastPayouts() {
    this.currentTable = this.pastPayouts;
    this.activeClass.pastJobs = false;
    this.activeClass.pastPayouts = true;
    this.activeClass.pastRequests = false;
  }

  selectPastRequests() {
    this.currentTable = this.pastRequests;
    this.activeClass.pastJobs = false;
    this.activeClass.pastPayouts = false;
    this.activeClass.pastRequests = true;
  }

  selectPastJobs() {
    this.currentTable = this.pastJobs;
    this.activeClass.pastJobs = true;
    this.activeClass.pastPayouts = false;
    this.activeClass.pastRequests = false;
  }

  onSearchPayoutTable(e: KeyboardEvent) {
    this.pastPayouts = this.tableService.searchPastPayouts(e.target['value'], this.pastPayouts, this.currentTable);
  }

  onSearchPastJobs(e: KeyboardEvent) {
    this.pastJobs = this.tableService.searchPastJobs(e.target['value'], this.pastJobs, this.currentTable);
  }

  onSearchPastRequests(e: KeyboardEvent) {
    this.pastRequests = this.tableService.searchPastRequest(e.target['value'], this.pastRequests, this.currentTable);

  }
}

