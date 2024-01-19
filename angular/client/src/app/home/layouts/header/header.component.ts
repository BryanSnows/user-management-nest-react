import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';

import {
  AuthService,
  ModalBasicComponent,
  UserService,
  LoadService,
} from 'src/app/shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: any = {};

  @Output() toggleMenuEvent = new EventEmitter<boolean>();

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private loadService: LoadService,
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();

    this.userService.observeUser().subscribe((user) => {
      this.user = user ? user : {};
    });
  }

  logout() {
    const dialogRef = this.dialog.open(ModalBasicComponent, {
      data: {
        title: 'general.confirmation',
        body: 'login.confirm-logout',
        hasCancel: true,
        iconPath: '../../../../assets/images/icons/exclamation-icon.svg',
      },
    });
  
    dialogRef.beforeClosed().subscribe((close) => {
      if (close) {
        this.authService.logout().subscribe({
          next: () => {
            this.router.navigate(['login']);
          },
          error: () => {
            this.router.navigate(['login']); 
          },
        });
      }
    });
  
    return dialogRef.afterClosed();
  }

  toggleMenu() {
    this.toggleMenuEvent.emit();
  }
}
