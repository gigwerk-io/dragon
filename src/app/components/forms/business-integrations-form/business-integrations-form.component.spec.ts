import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessIntegrationsFormComponent } from './business-integrations-form.component';

describe('BusinessIntegrationsFormComponent', () => {
  let component: BusinessIntegrationsFormComponent;
  let fixture: ComponentFixture<BusinessIntegrationsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessIntegrationsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessIntegrationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
