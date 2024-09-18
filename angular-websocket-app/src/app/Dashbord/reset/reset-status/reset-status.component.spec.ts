import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetStatusComponent } from './reset-status.component';

describe('ResetStatusComponent', () => {
  let component: ResetStatusComponent;
  let fixture: ComponentFixture<ResetStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetStatusComponent]
    });
    fixture = TestBed.createComponent(ResetStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
