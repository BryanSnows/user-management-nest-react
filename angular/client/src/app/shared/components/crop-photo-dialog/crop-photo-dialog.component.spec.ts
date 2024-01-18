import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropPhotoDialogComponent } from './crop-photo-dialog.component';

describe('CropPhotoDialogComponent', () => {
  let component: CropPhotoDialogComponent;
  let fixture: ComponentFixture<CropPhotoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CropPhotoDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CropPhotoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
