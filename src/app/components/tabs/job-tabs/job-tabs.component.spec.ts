import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobTabsComponent } from './job-tabs.component';

describe('JobTabsComponent', () => {
  let component: JobTabsComponent;
  let fixture: ComponentFixture<JobTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
