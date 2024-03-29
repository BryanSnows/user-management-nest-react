import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  exports: [DashboardComponent],
  declarations: [DashboardComponent],
  imports: [CommonModule, SharedModule],
})
export class DashboardModule {}
