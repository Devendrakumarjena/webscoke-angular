import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rs232StatusComponent } from './rs232-status.component';

describe('Rs232StatusComponent', () => {
  let component: Rs232StatusComponent;
  let fixture: ComponentFixture<Rs232StatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Rs232StatusComponent]
    });
    fixture = TestBed.createComponent(Rs232StatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
