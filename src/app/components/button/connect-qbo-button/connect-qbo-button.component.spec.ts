import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectQboButtonComponent } from './connect-qbo-button.component';

describe('ConnectQboButtonComponent', () => {
  let component: ConnectQboButtonComponent;
  let fixture: ComponentFixture<ConnectQboButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectQboButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectQboButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
