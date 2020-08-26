import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit, OnDestroy {
  transition = false;
  show = true;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('destroying')
  }

}
