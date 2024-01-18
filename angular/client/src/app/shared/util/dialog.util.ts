import { Injectable } from '@angular/core';
import { MatLegacyDialog as MatDialog, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

import { LoadService } from '../services/load.service';
import { ModalBasicComponent } from '../components/modal-basic/modal-basic.component';

@Injectable()
export class DialogUtil {
  constructor(public dialog: MatDialog, private loadService: LoadService) {}

  openDialog(
    data: any,
    width = '400px',
  ): MatDialogRef<ModalBasicComponent, any> {
    this.loadService.emitLoadEvent(false);

    return this.dialog.open(ModalBasicComponent, {
      width,
      autoFocus: false,
      data,
    });
  }

  openSuccessDialog(
    message = 'register.saved',
  ): MatDialogRef<ModalBasicComponent, any> {
    this.loadService.emitLoadEvent(false);

    return this.dialog.open(ModalBasicComponent, {
      width: '400px',
      autoFocus: false,
      data: {
        body: message,
        hasCancel: false,
        title: 'general.done',
        iconPath: '../../../../assets/images/icons/success-icon.svg',
      },
    });
  }

  openErrorDialog(
    message = 'error.server',
    bodyParam: any = undefined,
  ): MatDialogRef<ModalBasicComponent, any> {
    this.loadService.emitLoadEvent(false);

    return this.dialog.open(ModalBasicComponent, {
      width: '400px',
      autoFocus: false,
      data: {
        body: message,
        bodyParam,
        hasCancel: false,
        title: 'OPS!',
        iconPath: '../../../../assets/images/icons/error-icon.svg',
      },
    });
  }
}
