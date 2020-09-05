import { Component, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';
import { FormBuilderService } from '../../../utils/services/form-builder.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('index') index: number;


  transition = false;
  show = true;
  textObject = {
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
