import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersGridComponent } from './workers-grid.component';

describe('WorkersGridComponent', () => {
  let component: WorkersGridComponent;
  let fixture: ComponentFixture<WorkersGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
