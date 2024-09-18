import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rs485Component } from './rs485.component';

describe('Rs485Component', () => {
  let component: Rs485Component;
  let fixture: ComponentFixture<Rs485Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Rs485Component]
    });
    fixture = TestBed.createComponent(Rs485Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
