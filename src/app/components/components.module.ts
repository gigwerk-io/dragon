import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { TimeAgoPipe } from 'time-ago-pipe';
import { FooterComponent } from './footer/footer.component';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {LineChartComponent} from './line-chart/line-chart.component';
import {NotificationDropdownComponent} from './notification-dropdown/notification-dropdown.component';
import {UserDropdownComponent} from './user-dropdown/user-dropdown.component';
import { ProfileDropdownComponent } from './profile-dropdown/profile-dropdown.component';
import { LeaderboardListComponent } from './lists/leaderboard-list/leaderboard-list.component';
import { ArrowPercentageComponent } from './arrow-percentage/arrow-percentage.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
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
    PaginationComponent
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
    ArrowPercentageComponent
  ]
})
export class ComponentsModule {
}
