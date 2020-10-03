import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobBreakdownComponent } from './job-breakdown.component';

describe('JobBreakdownComponent', () => {
  let component: JobBreakdownComponent;
  let fixture: ComponentFixture<JobBreakdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobBreakdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
