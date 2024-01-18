import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgxWebstorageModule } from 'ngx-webstorage';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgChartsModule } from 'ng2-charts';

// Angular Material imports
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatSortModule } from '@angular/material/sort';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import {
  MatLegacyPaginatorModule as MatPaginatorModule,
  MatLegacyPaginatorIntl as MatPaginatorIntl,
} from '@angular/material/legacy-paginator';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

import {
  ApiService,
  AuthService,
  UserService,
  UserRouteAccessService,
  AuthExpiredInterceptor,
  NoWhiteSpaceDirective,
  OnlyNumbersDirective,
  SpecialCharactersDirective,
  ModalBasicComponent,
  LoadingComponent,
  VersionComponent,
  ValidatorUtil,
  DialogUtil,
  PaginatorI18n,
  EmptyListComponent,
  LocationService,
  CropPhotoDialogComponent,
  GenericChartComponent,
  BreadcrumbComponent,
} from './';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    TranslateModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSortModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatChipsModule,
    NgxMaskModule.forRoot(),
    ImageCropperModule,
    NgChartsModule,
  ],
  declarations: [
    NoWhiteSpaceDirective,
    OnlyNumbersDirective,
    SpecialCharactersDirective,
    LoadingComponent,
    ModalBasicComponent,
    VersionComponent,
    EmptyListComponent,
    CropPhotoDialogComponent,
    GenericChartComponent,
    BreadcrumbComponent,
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    TranslateModule,
    RouterModule,
    NoWhiteSpaceDirective,
    OnlyNumbersDirective,
    SpecialCharactersDirective,
    LoadingComponent,
    ModalBasicComponent,
    VersionComponent,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatMenuModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatCheckboxModule,
    EmptyListComponent,
    ReactiveFormsModule,
    MatChipsModule,
    NgxMaskModule,
    ImageCropperModule,
    BreadcrumbComponent,
    NgChartsModule,
    GenericChartComponent,
  ],
  providers: [
    ApiService,
    AuthService,
    UserService,
    UserRouteAccessService,
    ValidatorUtil,
    DialogUtil,
    LocationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptor,
      multi: true,
      deps: [Injector],
    },
    {
      provide: MatPaginatorIntl,
      useFactory: (translate: any) => {
        const service = new PaginatorI18n();
        service.injectTranslateService(translate);
        return service;
      },
      deps: [TranslateService],
    },
  ],
})
export class SharedModule {}
