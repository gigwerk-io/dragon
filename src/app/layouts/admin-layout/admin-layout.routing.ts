import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ApplicantsComponent } from '../../pages/applicants/applicants.component';
import { ApplicantComponent } from '../../pages/applicant/applicant.component';
import { JobComponent } from '../../pages/job/job.component';
import { JobsComponent } from '../../pages/jobs/jobs.component';
import { SubscriptionComponent } from '../../pages/subscription/subscription.component';
import { PlanComponent } from '../../pages/plan/plan.component';
import { PeopleComponent } from '../../pages/people/people.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import {SettingsLayoutComponent} from '../settings-layout/settings-layout.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'applicants', component: ApplicantsComponent },
  { path: 'applicant/:id', component: ApplicantComponent },
  { path: 'job/:id', component: JobComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'manage-subscription', component: SubscriptionComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'members', component: PeopleComponent },
  { path: 'notifications', component: NotificationsComponent },
  {
    path: 'settings',
    component: SettingsLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: '../settings-layout/settings-layout.module#SettingsLayoutModule'
      }
    ]
  }
];
