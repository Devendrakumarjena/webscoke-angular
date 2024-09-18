import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutStatusComponent } from './about-status.component';

describe('AboutStatusComponent', () => {
  let component: AboutStatusComponent;
  let fixture: ComponentFixture<AboutStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutStatusComponent]
    });
    fixture = TestBed.createComponent(AboutStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
