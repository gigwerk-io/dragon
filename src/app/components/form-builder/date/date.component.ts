import { Component, OnInit, Input } from '@angular/core';
import { FormBuilderService } from 'src/app/utils/services/form-builder.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('index') index: number;


  transition = false;
  show = true;
  dateObject = {
    requireToggle: false,
    placeholder: 'mm/dd/yyyy',
    label: 'Date',
    name: `date-${Date.now()}`,
  };

  constructor(
    private formBuilderService: FormBuilderService
  ) { }

  ngOnInit() {
  }

  deleteComponentFromArray() {
    this.formBuilderService.deleteComponentFromArray.next(this.index);
  }

}
