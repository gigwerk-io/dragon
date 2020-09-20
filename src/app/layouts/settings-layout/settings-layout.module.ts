import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GeneralComponent} from '../../pages/settings/general/general.component';
import {RouterModule} from '@angular/router';
import {SettingsLayoutRoutes} from './settings-layout.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ClipboardModule} from 'ngx-clipboard';
import {ComponentsModule} from '../../components/components.module';
import {IonicModule} from '@ionic/angular';
import {GuidedTourModule} from 'ngx-guided-tour';
import {BillingComponent} from '../../pages/settings/billing/billing.component';
import {IntegrationsComponent} from '../../pages/settings/integrations/integrations.component';
import {FieldServiceAppComponent} from '../../pages/settings/field-service-app/field-service-app.component';
import {FormsComponent} from '../../pages/settings/forms/forms.component';
import {TeamComponent} from '../../pages/settings/team/team.component';


@NgModule({
  declarations: [
    GeneralComponent,
    BillingComponent,
    IntegrationsComponent,
    FieldServiceAppComponent,
    FormsComponent,
    TeamComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SettingsLayoutRoutes),
    FormsModule,
    HttpClientModule,
    ClipboardModule,
    ComponentsModule,
    ReactiveFormsModule,
    IonicModule,
    GuidedTourModule,
  ]
})
export class SettingsLayoutModule {
}
