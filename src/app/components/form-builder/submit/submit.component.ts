import { Component, OnInit, Input } from '@angular/core';
import { FormBuilderService } from 'src/app/utils/services/form-builder.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('index') index: number;


  transition = false;
  show = true;
  submitObject = {
    requireToggle: false,
    placeholder: '',
    label: 'Text',
    name: `text-${Date.now()}`,
  };



  constructor(
    private formBuilderService: FormBuilderService
  ) { }

  ngOnInit() {}

  deleteComponentFromArray() {
    this.formBuilderService.deleteComponentFromArray.next(this.index);
  }

}
 