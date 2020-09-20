import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../utils/services/people.service';
import { User } from '../../utils/interfaces/models/User';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {
  workersList: User[];
  constructor(
    private peopleService: PeopleService
  ) { }

  ngOnInit() {
    this.peopleService.getAllUsers()
    .then((res) => this.workersList = res.data)
    .catch(err => console.log('This message should be replaced with an alert -> Getting all workers failed', err));
  }

}
