import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceStatusComponent } from './interface-status.component';

describe('InterfaceStatusComponent', () => {
  let component: InterfaceStatusComponent;
  let fixture: ComponentFixture<InterfaceStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfaceStatusComponent]
    });
    fixture = TestBed.createComponent(InterfaceStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
