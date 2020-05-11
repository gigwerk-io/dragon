import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishAccountSetupModalComponent } from './finish-account-setup-modal.component';

describe('FinishAccountSetupModalComponent', () => {
  let component: FinishAccountSetupModalComponent;
  let fixture: ComponentFixture<FinishAccountSetupModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishAccountSetupModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishAccountSetupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
