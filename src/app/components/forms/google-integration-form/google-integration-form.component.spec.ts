import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleIntegrationFormComponent } from './google-integration-form.component';

describe('GoogleIntegrationFormComponent', () => {
  let component: GoogleIntegrationFormComponent;
  let fixture: ComponentFixture<GoogleIntegrationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleIntegrationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleIntegrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
