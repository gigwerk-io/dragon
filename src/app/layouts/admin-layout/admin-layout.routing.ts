import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { SettingsComponent } from '../../pages/settings/settings.component';
import { ApplicantsComponent } from '../../pages/applicants/applicants.component';
import { ApplicantComponent } from '../../pages/applicant/applicant.component';
import { JobComponent } from '../../pages/job/job.component';
import { JobsComponent } from '../../pages/jobs/jobs.component';
import {SubscriptionComponent} from '../../pages/subscription/subscription.component';
import {PlanComponent} from '../../pages/plan/plan.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'applicants', component: ApplicantsComponent },
  { path: 'applicant/:id', component: ApplicantComponent },
  { path: 'job/:id', component: JobComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'subscription', component: SubscriptionComponent},
  { path: 'plan', component: PlanComponent},
];
