import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantTabsComponent } from './applicant-tabs.component';

describe('ApplicantTabsComponent', () => {
  let component: ApplicantTabsComponent;
  let fixture: ComponentFixture<ApplicantTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
