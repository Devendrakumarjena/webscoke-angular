import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsStatusComponent } from './settings-status.component';

describe('SettingsStatusComponent', () => {
  let component: SettingsStatusComponent;
  let fixture: ComponentFixture<SettingsStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsStatusComponent]
    });
    fixture = TestBed.createComponent(SettingsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
