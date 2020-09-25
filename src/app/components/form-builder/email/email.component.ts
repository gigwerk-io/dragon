import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { FormBuilderService } from 'src/app/utils/services/form-builder.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit, OnDestroy, OnChanges {
 
  // tslint:disable-next-line: no-input-rename
  @Input('index') index = 1;

  // tslint:disable-next-line: no-input-rename
  @Input('settings') settings;

  // tslint:disable-next-line: no-input-rename
  @Input('mode') mode: string;

  submitFormSubscription: Subscription;

  transition = false;
  show = true;
  emailObject = {
    requireToggle: true,
    placeholder: 'johndoe@example.com',
    label: 'Email',
    name: `email-${Date.now()}`,
    index: this.index
  };

  ngOnChanges() {
    this.emailObject.index = this.index;
  }

  constructor(
    private formBuilderService: FormBuilderService
  ) { }

  ngOnInit() {
    this.emailObject = this.formBuilderService.setOptions(this.settings, this.emailObject);
    this.emailObject.index = this.index;
    this.submitFormSubscription = this.formBuilderService.gatherComponentsOptions
    .subscribe(() => this.formBuilderService.componentOptions.push(this.emailObject));
  }

  deleteComponentFromArray() {
    this.formBuilderService.deleteComponentFromArray.next(this.index);
  }

  ngOnDestroy() {
    this.submitFormSubscription.unsubscribe();
  }

}
