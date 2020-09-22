import { ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PusherServiceProvider } from './utils/providers/pusher.service';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { IonicStorageModule } from '@ionic/storage';
import { ComponentsModule } from './components/components.module';
import { IonicModule } from '@ionic/angular';
import { NgxStripeModule } from 'ngx-stripe';
import { environment } from '../environments/environment';
import { CreditCardDirectivesModule } from 'angular-cc-library';
import { SentryErrorHandler } from './utils/handlers/SentryErrorHandler';
import { GuidedTourModule, GuidedTourService } from 'ngx-guided-tour';
import {NotyfModule} from 'ng-notyf';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    IonicModule.forRoot(),
    NgxStripeModule.forRoot(environment.stripePublicKey),
    CreditCardDirectivesModule,
    GuidedTourModule,
    NotyfModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
  ],
  providers: [
    GuidedTourService,
    PusherServiceProvider,
    // { provide: ErrorHandler, useClass: SentryErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
