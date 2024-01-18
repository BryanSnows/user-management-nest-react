import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MenuListComponent } from './layouts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  routeActive: string = '';
  menuOpen = false;

  @ViewChild(MenuListComponent) menuList!: MenuListComponent;

  constructor(private router: Router) {
    router.events.subscribe(() => {
      this.routeActive = this.router.url;
    });

    this.menuOpen = window.innerWidth >= 1024 ? true : false;
  }

  toggleMenu(menuOpen: boolean) {
    this.menuOpen = menuOpen;
  }

  toggleMenuMobile(event: any) {
    this.menuOpen = !this.menuOpen;
    this.menuList.toggleMenu();
  }
}
