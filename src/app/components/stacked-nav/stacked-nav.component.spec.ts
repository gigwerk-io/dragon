import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedNavComponent } from './stacked-nav.component';

describe('StackedNavComponent', () => {
  let component: StackedNavComponent;
  let fixture: ComponentFixture<StackedNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
