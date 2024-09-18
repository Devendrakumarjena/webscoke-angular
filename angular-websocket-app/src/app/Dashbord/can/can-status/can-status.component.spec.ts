import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanStatusComponent } from './can-status.component';

describe('CanStatusComponent', () => {
  let component: CanStatusComponent;
  let fixture: ComponentFixture<CanStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanStatusComponent]
    });
    fixture = TestBed.createComponent(CanStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
