import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  transition = false;
  show = true;
  emailObject = {
    requireToggle: true,
    placeholder: 'johndoe@example.com',
    label: 'Email',
    name: `email-${Date.now()}`,
  };

  constructor() { }

  ngOnInit() {
  }

}
