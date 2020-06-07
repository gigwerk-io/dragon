import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessLocationFormComponent } from './business-location-form.component';

describe('BusinessLocationFormComponent', () => {
  let component: BusinessLocationFormComponent;
  let fixture: ComponentFixture<BusinessLocationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessLocationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessLocationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
