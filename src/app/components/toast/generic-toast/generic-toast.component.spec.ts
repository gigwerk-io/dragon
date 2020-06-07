import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericToastComponent } from './generic-toast.component';

describe('GenericToastComponent', () => {
  let component: GenericToastComponent;
  let fixture: ComponentFixture<GenericToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
