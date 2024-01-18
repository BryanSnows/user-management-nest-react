import { Component, OnInit, Inject } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

import { LoadService } from '../../../shared/services/load.service';
import { DialogUtil } from '../../util/dialog.util';
import { ErrorUtil } from '../../util/error.util';

@Component({
  selector: 'app-crop-photo-dialog',
  templateUrl: './crop-photo-dialog.component.html',
  styleUrls: ['./crop-photo-dialog.component.scss'],
})
export class CropPhotoDialogComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';

  title: string = '';
  warning: string = '';
  event: any = '';
  hasCancel: boolean = false;

  public visible = false;

  constructor(
    public dialog: DialogUtil,
    public loadService: LoadService,
    public dialogRef: MatDialogRef<CropPhotoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.title = data.title;
    this.warning = data.warning;
    this.hasCancel = data.hasCancel;
    this.event = data.event;
  }

  ngOnInit(): void {
    this.fileChangeEvent(this.event);
  }

  fileChangeEvent(event: any) {
    this.imageChangedEvent = event;
  }

  async imageCropped(event: ImageCroppedEvent) {
    if (event.base64) {
      const base64Image = await fetch(event.base64);
      this.croppedImage = await base64Image.blob();
    }
  }

  imageLoaded(image: LoadedImage) {}

  cropperReady() {}

  loadImageFailed() {
    this.dialogRef.close(false);
    this.dialog.openErrorDialog(ErrorUtil.translateError('invalid-image'));
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close({
      target: {
        files: [
          new File([this.croppedImage], this.event.target.files[0].name, {
            type: this.croppedImage.type,
          }),
        ],
      },
    });
  }
}
