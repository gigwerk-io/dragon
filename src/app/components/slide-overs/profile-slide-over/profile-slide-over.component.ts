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
  showDropdown = false;
  // tslint:disable-next-line: no-input-rename
  @Input('userID') UserID: number;

  constructor(
    public peopleService: PeopleService
  ) { }

  ngOnInit() {
    this.transition = false;
  }

  ngOnChanges() {
    if (this.UserID !== undefined) {
      this.profile = this.peopleService.searchForUser(this.UserID);
      this.profile ? setTimeout(() => this.transition = true, 50) : this.transition = false;
    }
  }

  clear() {
    this.transition = false;
  }


}