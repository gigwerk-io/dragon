import { Component, OnInit, Input } from '@angular/core';
import { FormBuilderService } from 'src/app/utils/services/form-builder.service';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('index') index: number;

  transition = false;
  show = true;
  textAreaObject = {
    requireToggle: false,
    placeholder: '',
    label: 'Text Area',
    name: `textarea-${Date.now()}`,
  };


  constructor(
    private formBuilderService: FormBuilderService
  ) { }

  ngOnInit() {}

  deleteComponentFromArray() {
    this.formBuilderService.deleteComponentFromArray.next(this.index);
  }

}
