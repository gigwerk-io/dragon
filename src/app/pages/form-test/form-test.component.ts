import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit, OnDestroy {
  

  constructor() { }

  ngOnInit() {
    console.log('form test')
  }

  ngOnDestroy() {
    console.log('destroying')
  }



}
