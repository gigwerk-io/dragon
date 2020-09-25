import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormBuilderService } from 'src/app/utils/services/form-builder.service';
import { OnboardingFormHeader, OnboardingFormComponent } from 'src/app/utils/interfaces/models/OnboardingForm';
import { SettingsService } from 'src/app/utils/services/settings.service';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {

  @ViewChild('componentContainer', { static: false }) cmptContainer;

  // deleteComponentSubscription: Subscription;
  form: OnboardingFormComponent[];

  masterFields = [
    { componentName: 'text', settings: undefined },
    { componentName: 'email', settings: undefined },
    { componentName: 'phone', settings: undefined },
    { componentName: 'number', settings: undefined },
    { componentName: 'date', settings: undefined },
    { componentName: 'date-time', settings: undefined },
    { componentName: 'textarea', settings: undefined },
    { componentName: 'paragraph', settings: undefined },
    { componentName: 'checkbox', settings: undefined },
    { componentName: 'radio', settings: undefined },
    { componentName: 'select', settings: undefined },
    { componentName: 'submit', settings: undefined }
  ];

  formHeader: OnboardingFormHeader = {
    formTitle: '',
    formDescription: ''
  };

  fields = [...this.masterFields];

  components = [
  ];


  constructor(
    private formBuilderService: FormBuilderService,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.formBuilderService.deleteComponentFromArray.subscribe(index => this.components.splice(index, 1));

    this.getFormFromService();

  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

      console.log('components', this.components)
      this.fields = [...this.masterFields];
    }
  }

  submitForm() {
    // this.components = [...this.components];
    const componentBody = this.components.map(el => el.componentName)
    this.formBuilderService.gatherComponentsOptions.next('submit form');
    this.formBuilderService.organizeComponents(componentBody, this.formHeader);
  }

  getFormFromService() {
    if (this.formBuilderService.form && this.formBuilderService.formHeader) {
      this.setFormValues(this.formBuilderService.form, this.formBuilderService.formHeader)
    } else {
      this.settingsService.getApplicantForm().then(res => {
        this.setFormValues(res.data.formComponents, res.data.formHeader);
      });
    }
  }

  setFormValues(form: OnboardingFormComponent[], formHeader: OnboardingFormHeader) {
    this.formHeader.formTitle = formHeader.formTitle;
    this.formHeader.formDescription = formHeader.formDescription;
    this.form = form;
    // this.components = this.form.map(el => {componentName: el.component,settings: el.options} );
    this.components = this.form.map(el => {
      return { componentName: el.component, settings: el.options };
    });
  }



}
