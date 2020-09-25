import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantsBreakdownComponent } from './applicants-breakdown.component';

describe('ApplicantsBreakdownComponent', () => {
  let component: ApplicantsBreakdownComponent;
  let fixture: ComponentFixture<ApplicantsBreakdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantsBreakdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantsBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
