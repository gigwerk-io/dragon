import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PeopleService } from '../../../utils/services/people.service';
import { User } from '../../../utils/interfaces/models/User';


@Component({
  selector: 'app-profile-slide-over',
  templateUrl: './profile-slide-over.component.html',
  styleUrls: ['./profile-slide-over.component.css']
})
export class ProfileSlideOverComponent implements OnInit, OnChanges {

  transition: boolean;
  profile: User;
  // tslint:disable-next-line: no-input-rename
  @Input('userID') UserID: number;

  constructor(
    private peopleService: PeopleService
  ) { }

  ngOnInit() {
    this.transition = false;
  }

  ngOnChanges() {
    if (this.UserID !== undefined) {
      this.getUser();
      this.transition = true;
    }
  }

  getUser() {
    this.peopleService.getSingleUser(this.UserID).then(res => this.profile = res.data).catch(err => {
      // In the future an error message should show up;
      this.clear();
    });
  }

  clear() {
    this.transition = false;
    this.profile = undefined;
  }


}
