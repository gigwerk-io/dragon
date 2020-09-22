import { Component, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';
import { FormBuilderService } from '../../../utils/services/form-builder.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit, OnDestroy, OnChanges {

  // tslint:disable-next-line: no-input-rename
  @Input('index') index: number;

  submitFormSubscription: Subscription;
  transition = false;
  show = true;
  textObject = {
    required: false,
    placeholder: '',
    label: 'Text',
    name: `text-${Date.now()}`,
    index: this.index
  };

  ngOnChanges() {
    this.textObject.index = this.index;
  }


  constructor(
    private formBuilderService: FormBuilderService
  ) { }

  ngOnInit() {
    this.textObject.index = this.index;
    this.submitFormSubscription = this.formBuilderService.gatherComponentsOptions
    .subscribe(() => this.formBuilderService.componentOptions.push(this.textObject));
  }

  deleteComponentFromArray() {
    this.formBuilderService.deleteComponentFromArray.next(this.index);
  }


  ngOnDestroy() {
    this.submitFormSubscription.unsubscribe();
  }

}
