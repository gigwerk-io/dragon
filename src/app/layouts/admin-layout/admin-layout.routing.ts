import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { SettingsComponent } from '../../pages/settings/settings.component';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'profile/:id', component: ProfileComponent }
];
