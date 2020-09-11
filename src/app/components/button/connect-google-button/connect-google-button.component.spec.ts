import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectGoogleButtonComponent } from './connect-google-button.component';

describe('ConnectGoogleButtonComponent', () => {
  let component: ConnectGoogleButtonComponent;
  let fixture: ComponentFixture<ConnectGoogleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectGoogleButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectGoogleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
