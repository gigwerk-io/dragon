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
import { ComponentsModule } from '../../components/components.module';
import { SettingsComponent } from '../../pages/settings/settings.component';
import { ApplicantsComponent } from '../../pages/applicants/applicants.component';
import { ApplicantComponent } from '../../pages/applicant/applicant.component';
import { IonicModule } from '@ionic/angular';
import { JobComponent } from '../../pages/job/job.component';
import { JobsComponent } from '../../pages/jobs/jobs.component';

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
    IonicModule,
  ],
  declarations: [
    DashboardComponent,
    SettingsComponent,
    ApplicantsComponent,
    ApplicantComponent,
    JobComponent
    JobsComponent
  ]
})

export class AdminLayoutModule { }
