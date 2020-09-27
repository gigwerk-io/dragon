import { Component, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';
import { FormBuilderService } from '../../../utils/services/form-builder.service';
import { Subscription } from 'rxjs';
// import {DragDropModule} from '@angular/cdk/drag-drop';
import { CdkDragDrop, moveItemInArray, transferArrayItem, DragDropModule } from '@angular/cdk/drag-drop';

import { $ } from 'protractor';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit, OnDestroy, OnChanges {

  // tslint:disable-next-line: no-input-rename
  @Input('index') index = 1;

  // tslint:disable-next-line: no-input-rename
  @Input('settings') settings;

  // tslint:disable-next-line: no-input-rename
  @Input('mode') mode: string;

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

    this.textObject = this.formBuilderService.setOptions(this.settings, this.textObject);
    this.textObject.index = this.index;
    this.submitFormSubscription = this.formBuilderService.gatherComponentsOptions
      .subscribe(() => this.formBuilderService.componentOptions.push(this.textObject));
  }


  deleteComponentFromArray() {
    this.formBuilderService.deleteComponentFromArray.next(this.index);
  }

  backdrop() {
    console.log('clicked on the backdrop')
  }


  ngOnDestroy() {
    this.submitFormSubscription.unsubscribe();
  }

}

