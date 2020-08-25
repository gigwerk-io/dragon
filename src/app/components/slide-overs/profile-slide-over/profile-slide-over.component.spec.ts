import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSlideOverComponent } from './profile-slide-over.component';

describe('ProfileSlideOverComponent', () => {
  let component: ProfileSlideOverComponent;
  let fixture: ComponentFixture<ProfileSlideOverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSlideOverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSlideOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
