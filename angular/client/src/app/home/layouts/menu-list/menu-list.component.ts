import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { UserService, MenuAccessRoles } from '../../../shared';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent implements OnInit {
  user: any = {};
  userImage = '';
  menuOpen = false;

  routeActive!: string;

  @Output() toggleMenuEvent = new EventEmitter<boolean>();

  constructor(private router: Router, private userService: UserService) {
    this.menuOpen = window.innerWidth >= 1024 ? true : false;

    router.events.subscribe(() => {
      this.routeActive = this.router.url;
    });
  }

  ngOnInit(): void {
    const userImagePath = './../../../assets/images/icons/profile-icon.svg';

    this.user = this.userService.getUser();
    this.userImage = this.user.imageUrl ? this.user.imageUrl : userImagePath;

    this.userService.observeUser().subscribe((user) => {
      this.user = user ? user : {};
      this.userImage = this.user.imageUrl ? this.user.imageUrl : userImagePath;
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.toggleMenuEvent.emit(this.menuOpen);
  }

  toggleMenuMobile() {
    if (window.innerWidth < 768) {
      this.menuOpen = false;
      this.toggleMenuEvent.emit(this.menuOpen);
    }
  }

  hasAccess(menu: string) {
    return (
      MenuAccessRoles[menu] && MenuAccessRoles[menu].includes(this.user.role)
    );
  }
}
