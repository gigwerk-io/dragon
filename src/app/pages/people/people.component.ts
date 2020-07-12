import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../utils/services/people.service';
import { User } from '../../utils/interfaces/models/User';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  peopleList: User[];
  constructor(
    private peopleService: PeopleService
  ) { }

  ngOnInit() {
    this.peopleService.getAllUsers().then((res) => this.peopleList = res.data);
  }

}
