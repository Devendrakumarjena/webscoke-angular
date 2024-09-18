import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rs485StatusComponent } from './rs485-status.component';

describe('Rs485StatusComponent', () => {
  let component: Rs485StatusComponent;
  let fixture: ComponentFixture<Rs485StatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Rs485StatusComponent]
    });
    fixture = TestBed.createComponent(Rs485StatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
