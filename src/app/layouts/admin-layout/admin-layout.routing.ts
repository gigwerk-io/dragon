import {Routes} from '@angular/router';

import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {SettingsComponent} from '../../pages/settings/settings.component';
import {ApplicantsComponent} from '../../pages/applicants/applicants.component';
import {ApplicantComponent} from '../../pages/applicant/applicant.component';

export const AdminLayoutRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'applicants', component: ApplicantsComponent},
  {path: 'applicant/:id', component: ApplicantComponent}
];
