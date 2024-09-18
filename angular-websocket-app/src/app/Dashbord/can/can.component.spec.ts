import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanComponent } from './can.component';

describe('CanComponent', () => {
  let component: CanComponent;
  let fixture: ComponentFixture<CanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanComponent]
    });
    fixture = TestBed.createComponent(CanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
