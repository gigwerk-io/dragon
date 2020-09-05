import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { FormBuilderService } from 'src/app/utils/services/form-builder.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit, OnDestroy {

  @ViewChild('componentContainer', {static: false}) cmptContainer;

  deleteComponentSubscription: Subscription;

  masterFields = [
    'text',
    'email',
    'phone',
    'number',
    'date',
    'date-time',
    'textarea',
    'paragraph',
    'checkbox',
    'radio',
    'select'
  ];

  formTitle = '';
  formDescription = '';

  fields = [...this.masterFields];

  components = [
    'text'
  ];


  constructor(
    private formBuilderService: FormBuilderService
  ) { }

  ngOnInit() {
    this.formBuilderService.deleteComponentFromArray.subscribe(index => this.components.splice(index, 1));
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      this.fields = [...this.masterFields];
    }
  }

  check() {
    console.log('final list', this.components)
  }

  ngOnDestroy() {
    this.deleteComponentSubscription.unsubscribe();
  }


}
