import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  transition = false;
  show = true;
  selectObject = {
    requireToggle: false,
    placeholder: '',
    label: 'Text',
    name: `text-${Date.now()}`,
    selectArr: [
      {text: 'Option 1', value: 'Option 1'},
      {text: 'Option 2', value: 'Option 2'},
      {text: 'Option 3', value: 'Option 3'}
    ]
  };

  selectValue = '';
  newSelectText = '';
  newSelectValue = '';

 

  constructor() { }

  ngOnInit() {
  }

  addOption() {
    if (this.newSelectText.length && this.newSelectValue.length) {
      this.selectObject.selectArr.push({text: this.newSelectText, value: this.newSelectValue});
      this.newSelectText = '';
      this.newSelectValue = '';
    }
  }
  

}
