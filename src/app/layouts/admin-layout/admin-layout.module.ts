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
import { ApplicantsComponent } from '../../pages/applicants/applicants.component';
import { ApplicantComponent } from '../../pages/applicant/applicant.component';
import { IonicModule } from '@ionic/angular';
import { JobComponent } from '../../pages/job/job.component';
import { JobsComponent } from '../../pages/jobs/jobs.component';
import { SubscriptionComponent } from '../../pages/subscription/subscription.component';
import { PlanComponent } from '../../pages/plan/plan.component';
import { GuidedTourModule } from 'ngx-guided-tour';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { FormTestComponent } from '../../pages/form-test/form-test.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {SettingsLayoutComponent} from '../settings-layout/settings-layout.component';
import { WorkersComponent } from 'src/app/pages/workers/workers.component';

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
    GuidedTourModule,
    DragDropModule

  ],
  declarations: [
    DashboardComponent,
    ApplicantsComponent,
    ApplicantComponent,
    JobComponent,
    JobsComponent,
    SubscriptionComponent,
    PlanComponent,
    WorkersComponent,
    NotificationsComponent,
    SettingsLayoutComponent,
    NotificationsComponent,
    FormTestComponent
  ]
})

export class AdminLayoutModule { }
