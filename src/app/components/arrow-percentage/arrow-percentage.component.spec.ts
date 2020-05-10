import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowPercentageComponent } from './arrow-percentage.component';

describe('ArrowPercentageComponent', () => {
  let component: ArrowPercentageComponent;
  let fixture: ComponentFixture<ArrowPercentageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrowPercentageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
