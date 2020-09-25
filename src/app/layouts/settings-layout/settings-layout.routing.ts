import {Routes} from '@angular/router';
import {GeneralComponent} from '../../pages/settings/general/general.component';
import {BillingComponent} from '../../pages/settings/billing/billing.component';
import {IntegrationsComponent} from '../../pages/settings/integrations/integrations.component';
import { FormsComponent } from 'src/app/pages/settings/forms/forms.component';

export const SettingsLayoutRoutes: Routes = [
  {
    path: '',
    redirectTo: 'general',
    pathMatch: 'full',
  },
  {path: 'general', component: GeneralComponent},
  {path: 'billing', component: BillingComponent},
  {path: 'integrations', component: IntegrationsComponent},
  {path: 'onboarding', component: FormsComponent}
];
