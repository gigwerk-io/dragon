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
import { GenericToastComponent } from './toast/generic-toast/generic-toast.component';
import { StatsCardComponent } from './cards/stats-card/stats-card.component';
import { ApplicantListComponent } from './lists/applicant-list/applicant-list.component';
import { JobsListComponent } from './lists/jobs-list/jobs-list.component';
import { PaymentMethodModalComponent } from './modal/payment-method-modal/payment-method-modal.component';
import { NgxStripeModule } from 'ngx-stripe';
import { PeopleGridComponent } from './grids/people-grid/people-grid.component';
import { IonicModule } from '@ionic/angular';
import { NotificationsListComponent } from './lists/notifications-list/notifications-list.component';
import { TextComponent } from './form-builder/text/text.component';
import { EmailComponent } from './form-builder/email/email.component';
import { PhoneComponent } from './form-builder/phone/phone.component';
import { NumberComponent } from './form-builder/number/number.component';
import { DateComponent } from './form-builder/date/date.component';
import { DateTimeComponent } from './form-builder/date-time/date-time.component';
import { TextareaComponent } from './form-builder/textarea/textarea.component';
import { ParagraphComponent } from './form-builder/paragraph/paragraph.component';
import { CheckboxComponent } from './form-builder/checkbox/checkbox.component';
import { RadioComponent } from './form-builder/radio/radio.component';

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
    GenericToastComponent,
    StatsCardComponent,
    ApplicantListComponent,
    JobsListComponent,
    PaymentMethodModalComponent,
    PeopleGridComponent,
    NotificationsListComponent,
    TextComponent,
    EmailComponent,
    PhoneComponent,
    NumberComponent,
    DateComponent,
    DateTimeComponent,
    TextareaComponent,
    ParagraphComponent,
    CheckboxComponent,
    RadioComponent,
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
    GenericToastComponent,
    StatsCardComponent,
    PaginationComponent,
    ApplicantListComponent,
    StarRatingComponent,
    JobsListComponent,
    PaymentMethodModalComponent,
    PeopleGridComponent,
    TextComponent,
    NotificationsListComponent,
    EmailComponent,
    PhoneComponent,
    NumberComponent,
    DateComponent,
    DateTimeComponent,
    TextareaComponent,
    ParagraphComponent,
    CheckboxComponent,
    RadioComponent,
  ]
})
export class ComponentsModule {
}
