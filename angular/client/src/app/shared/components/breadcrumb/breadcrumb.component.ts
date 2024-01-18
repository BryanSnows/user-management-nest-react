import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  @Input() menu: any = [];

  routeActive!: string;

  constructor(private router: Router, private location: Location) {
    router.events.subscribe(() => {
      this.routeActive = this.router.url;
    });
  }

  backToList() {
    this.location.back();
  }

  checkActiveItem(item: any) {
    if (
      (this.routeActive.startsWith(item.route) &&
        this.menu.indexOf(item) !== 0) ||
      (this.routeActive === item.route && this.menu.indexOf(item) === 0)
    ) {
      return 'breadcrumb-item active';
    } else {
      return 'breadcrumb-item';
    }
  }
}
