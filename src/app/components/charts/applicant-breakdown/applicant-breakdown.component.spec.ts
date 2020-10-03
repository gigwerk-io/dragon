import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantBreakdownComponent } from './applicant-breakdown.component';

describe('ApplicantBreakdownComponent', () => {
  let component: ApplicantBreakdownComponent;
  let fixture: ComponentFixture<ApplicantBreakdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantBreakdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
