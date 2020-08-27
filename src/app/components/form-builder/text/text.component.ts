import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  transition = false;
  show = true;
  textObject = {
    requireToggle: false,
    placeholder: '',
    label: 'Text',
    name: `text-${Date.now()}`,
  };

  constructor() { }

  ngOnInit() {
  }


}
 