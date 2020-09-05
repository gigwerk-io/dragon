import { Component, OnInit, Input } from '@angular/core';
import { FormBuilderService } from 'src/app/utils/services/form-builder.service';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('index') index: number;


  transition = false;
  show = true;
  numberObject = {
    requireToggle: false,
    placeholder: '',
    label: 'Number',
    name: `number-${Date.now()}`,
  };

  constructor(
    private formBuilderService: FormBuilderService
  ) { }

  ngOnInit() {}

  deleteComponentFromArray() {
    this.formBuilderService.deleteComponentFromArray.next(this.index);
  }

}
