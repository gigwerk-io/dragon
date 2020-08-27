import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {
  transition = false;
  show = true;
  textAreaObject = {
    requireToggle: false,
    placeholder: '',
    label: 'Text Area',
    name: `textarea-${Date.now()}`,
  };


  constructor() { }

  ngOnInit() {
  }

}
