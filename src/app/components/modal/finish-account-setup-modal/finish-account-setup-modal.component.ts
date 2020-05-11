import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MissingSteps} from '../../../utils/interfaces/user/User';

@Component({
  selector: 'app-finish-account-setup-modal',
  templateUrl: './finish-account-setup-modal.component.html',
  styleUrls: ['./finish-account-setup-modal.component.css']
})
export class FinishAccountSetupModalComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('show') show: boolean;
  // tslint:disable-next-line:no-input-rename
  @Input('missingSteps') missingSteps: MissingSteps;
  @Output() close = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.close.emit();
  }
}
