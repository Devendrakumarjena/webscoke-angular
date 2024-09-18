import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WirelessStatusComponent } from './wireless-status.component';

describe('WirelessStatusComponent', () => {
  let component: WirelessStatusComponent;
  let fixture: ComponentFixture<WirelessStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WirelessStatusComponent]
    });
    fixture = TestBed.createComponent(WirelessStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
