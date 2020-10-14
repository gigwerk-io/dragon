import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ApplicantsComponent } from '../../pages/applicants/applicants.component';
import { JobsComponent } from '../../pages/jobs/jobs.component';
import { WorkersComponent } from '../../pages/workers/workers.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { SettingsLayoutComponent } from '../settings-layout/settings-layout.component';
import { FormBuilderComponent } from '../../pages/form-builder/form-builder.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'applicants', component: ApplicantsComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'workers', component: WorkersComponent },
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
  },
  { path: 'form-builder', component: FormBuilderComponent }, // THIS FORM IS ONLY FOR TESTING OUT FORM COMPONENTS. NEEDS TO BE DELETED
];
