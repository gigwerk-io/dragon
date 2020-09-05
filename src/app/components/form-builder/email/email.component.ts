import { Component, OnInit, Input } from '@angular/core';
import { FormBuilderService } from 'src/app/utils/services/form-builder.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('index') index: number;


  transition = false;
  show = true;
  emailObject = {
    requireToggle: true,
    placeholder: 'johndoe@example.com',
    label: 'Email',
    name: `email-${Date.now()}`,
  };

  constructor(
    private formBuilderService: FormBuilderService
  ) { }

  ngOnInit() {}

  deleteComponentFromArray() {
    this.formBuilderService.deleteComponentFromArray.next(this.index);
  }

}
