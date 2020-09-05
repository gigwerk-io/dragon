import { Component, OnInit, Input } from '@angular/core';
import { FormBuilderService } from 'src/app/utils/services/form-builder.service';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('index') index: number;

  transition = false;
  show = true;
  paragraphObject = {
    requireToggle: false,
    placeholder: 'Type your text to display here',
    label: 'Paragraph',
    name: `paragraph-${Date.now()}`,
  };

  constructor(
    private formBuilderService: FormBuilderService
  ) { }

  ngOnInit() {}

  deleteComponentFromArray() {
    this.formBuilderService.deleteComponentFromArray.next(this.index);
  }

}
