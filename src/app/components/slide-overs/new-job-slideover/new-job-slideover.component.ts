import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JobsService } from '../../../utils/services/jobs.service';

@Component({
  selector: 'app-new-job-slideover',
  templateUrl: './new-job-slideover.component.html',
  styleUrls: ['./new-job-slideover.component.css']
})
export class NewJobSlideoverComponent implements
  OnInit, OnChanges {

  openSlider = false;
  // tslint:disable-next-line: no-input-rename
  @Input('display') display: boolean;
  @Output() dismiss = new EventEmitter<boolean>();
  constructor(private jobService: JobsService) { }

    ngOnChanges() {
      if (this.display === true) {
        setTimeout(() => this.openSlider = true, 200);
      }
    }

  ngOnInit() {}

  toggle() {
    this.openSlider = false;
    setTimeout(() => {
      this.display = false;
      this.dismiss.emit(this.display);
    }, 600);
  }
}
