import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent, homeRoute } from './';
import { HeaderComponent, FooterComponent, MenuListComponent } from './layouts';
import { SharedModule } from '../shared/shared.module';
import { WelcomeModule } from './welcome/welcome.module';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MenuListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([homeRoute]),
    WelcomeModule,
    DashboardModule
  ],
})
export class HomeModule {}
