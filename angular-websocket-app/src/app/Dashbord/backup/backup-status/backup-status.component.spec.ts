import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupStatusComponent } from './backup-status.component';

describe('BackupStatusComponent', () => {
  let component: BackupStatusComponent;
  let fixture: ComponentFixture<BackupStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackupStatusComponent]
    });
    fixture = TestBed.createComponent(BackupStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
