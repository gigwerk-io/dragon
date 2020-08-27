import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {

  transition = false;
  show = true;
  paragraphObject = {
    requireToggle: false,
    placeholder: 'Type your text to display here',
    label: 'Paragraph',
    name: `paragraph-${Date.now()}`,
  };

  constructor() { }

  ngOnInit() {
  }

}
