import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldServiceAppComponent } from './field-service-app.component';

describe('FieldServiceAppComponent', () => {
  let component: FieldServiceAppComponent;
  let fixture: ComponentFixture<FieldServiceAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldServiceAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldServiceAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
