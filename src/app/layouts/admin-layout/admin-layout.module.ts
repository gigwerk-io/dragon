import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ComponentsModule} from '../../components/components.module';
import {SettingsComponent} from '../../pages/settings/settings.component';
import { NotificationsComponent } from 'src/app/pages/notifications/notifications.component';
import { AppPage } from 'e2e/src/app.po';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    ClipboardModule,
    NgxSpinnerModule,
    NgxChartsModule,
    ComponentsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DashboardComponent,
    SettingsComponent,
    NotificationsComponent
  ],
  exports: [
    
  ]
})

export class AdminLayoutModule { }
