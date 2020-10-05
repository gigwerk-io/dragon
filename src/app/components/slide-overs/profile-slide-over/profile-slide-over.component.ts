import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PeopleService } from '../../../utils/services/people.service';
import { User } from '../../../utils/interfaces/models/User';


@Component({
  selector: 'app-profile-slide-over',
  templateUrl: './profile-slide-over.component.html',
  styleUrls: ['./profile-slide-over.component.css']
})
export class ProfileSlideOverComponent implements OnInit, OnChanges {

  openSlider: boolean;
  profile: User;
  showDropdown = false;
  // tslint:disable-next-line: no-input-rename
  @Input('userID') UserID: number;

  constructor(
    public peopleService: PeopleService
  ) { }

  ngOnInit() {
    this.openSlider = false;
  }

  ngOnChanges() {
    if (this.UserID !== undefined) {
      this.profile = this.peopleService.searchForUser(this.UserID);
      this.profile ? setTimeout(() => this.openSlider = true, 50) : this.openSlider = false;
    }
  }

  clear() {
    this.openSlider = false;
  }


}
