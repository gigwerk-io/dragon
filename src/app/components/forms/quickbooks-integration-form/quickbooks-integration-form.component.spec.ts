import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickbooksIntegrationFormComponent } from './quickbooks-integration-form.component';

describe('QuickbooksIntegrationFormComponent', () => {
  let component: QuickbooksIntegrationFormComponent;
  let fixture: ComponentFixture<QuickbooksIntegrationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickbooksIntegrationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickbooksIntegrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
