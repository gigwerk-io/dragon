import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit, AfterViewInit {

  observer: MutationObserver;
  // elRef: ElementRef;

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

  fields = [...this.masterFields];

  components = [
    'text',
    // 'email',
  ];

  ngAfterViewInit() {
    this.observer = new MutationObserver(mutations => {
      mutations.forEach(function(mutation) {
        console.log(mutation.type);
      }); 
    });
    var config = { attributes: true, childList: true, characterData: true };

    // this.observer.observe(this.elRef.nativeElement, config);
  }
  constructor() { }

  ngOnInit() {

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


}
