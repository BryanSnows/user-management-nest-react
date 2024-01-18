import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare var require: any;

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss'],
})
export class VersionComponent {
  version: string = require('../../../../../package.json').version;
  routeActive!: string;

  constructor(private router: Router) {
    router.events.subscribe(() => {
      this.routeActive = this.router.url;
    });
  }
}
