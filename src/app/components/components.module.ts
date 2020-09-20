import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { TimeAgoPipe } from 'time-ago-pipe';
import { FooterComponent } from './footer/footer.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { NotificationDropdownComponent } from './notification-dropdown/notification-dropdown.component';
import { UserDropdownComponent } from './user-dropdown/user-dropdown.component';
import { ProfileDropdownComponent } from './profile-dropdown/profile-dropdown.component';
import { LeaderboardListComponent } from './lists/leaderboard-list/leaderboard-list.component';
import { ArrowPercentageComponent } from './arrow-percentage/arrow-percentage.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FinishAccountSetupModalComponent } from './modal/finish-account-setup-modal/finish-account-setup-modal.component';
import { BusinessInfoFormComponent } from './forms/business-info-form/business-info-form.component';
import { BusinessLocationFormComponent } from './forms/business-location-form/business-location-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatsCardComponent } from './cards/stats-card/stats-card.component';
import { ApplicantListComponent } from './lists/applicant-list/applicant-list.component';
import { JobsListComponent } from './lists/jobs-list/jobs-list.component';
import { PaymentMethodModalComponent } from './modal/payment-method-modal/payment-method-modal.component';
import { NgxStripeModule } from 'ngx-stripe';
import { WorkersGridComponent } from './grids/workers-grid/workers-grid.component';
import { IonicModule } from '@ionic/angular';
import { NotificationsListComponent } from './lists/notifications-list/notifications-list.component';
import { StackedNavComponent } from './stacked-nav/stacked-nav.component';
import { MobileMenuComponent } from './menus/mobile-menu/mobile-menu.component';
import { ProfileSlideOverComponent } from './slide-overs/profile-slide-over/profile-slide-over.component';
import { SettingsMenuComponent } from './menus/settings-menu/settings-menu.component';
import { BusinessIntegrationsFormComponent } from './forms/business-integrations-form/business-integrations-form.component';
import { ConnectGoogleButtonComponent } from './button/connect-google-button/connect-google-button.component';
import { GoogleIntegrationFormComponent } from './forms/google-integration-form/google-integration-form.component';
import { QuickbooksIntegrationFormComponent } from './forms/quickbooks-integration-form/quickbooks-integration-form.component';
import { ConnectQboButtonComponent } from './button/connect-qbo-button/connect-qbo-button.component';
import { ApplicantTabsComponent } from './tabs/applicant-tabs/applicant-tabs.component';
import { JobTabsComponent } from './tabs/job-tabs/job-tabs.component';
import { NewJobSlideoverComponent } from './slide-overs/new-job-slideover/new-job-slideover.component';
import { JobFormComponent } from './forms/job-form/job-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxStripeModule,
    IonicModule
  ],
  declarations: [
    SidebarComponent,
    TimeAgoPipe,
    FooterComponent,
    BarChartComponent,
    LineChartComponent,
    NotificationDropdownComponent,
    UserDropdownComponent,
    ProfileDropdownComponent,
    LeaderboardListComponent,
    ArrowPercentageComponent,
    StarRatingComponent,
    PaginationComponent,
    FinishAccountSetupModalComponent,
    BusinessInfoFormComponent,
    BusinessLocationFormComponent,
    StatsCardComponent,
    ApplicantListComponent,
    JobsListComponent,
    PaymentMethodModalComponent,
    WorkersGridComponent,
    NotificationsListComponent,
    StackedNavComponent,
    MobileMenuComponent,
    ProfileSlideOverComponent,
    SettingsMenuComponent,
    BusinessIntegrationsFormComponent,
    ConnectGoogleButtonComponent,
    GoogleIntegrationFormComponent,
    QuickbooksIntegrationFormComponent,
    ConnectQboButtonComponent,
    ApplicantTabsComponent,
    JobTabsComponent,
    NewJobSlideoverComponent,
    JobFormComponent,
  ],
    exports: [
        FooterComponent,
        SidebarComponent,
        TimeAgoPipe,
        BarChartComponent,
        LineChartComponent,
        NotificationDropdownComponent,
        UserDropdownComponent,
        LeaderboardListComponent,
        ArrowPercentageComponent,
        BusinessLocationFormComponent,
        BusinessInfoFormComponent,
        StatsCardComponent,
        PaginationComponent,
        ApplicantListComponent,
        StarRatingComponent,
        JobsListComponent,
        PaymentMethodModalComponent,
        WorkersGridComponent,
        NotificationsListComponent,
        StackedNavComponent,
        ProfileSlideOverComponent,
        SettingsMenuComponent,
        BusinessIntegrationsFormComponent,
        GoogleIntegrationFormComponent,
        QuickbooksIntegrationFormComponent,
        ApplicantTabsComponent,
        JobTabsComponent,
    ]
})
export class ComponentsModule {
}
