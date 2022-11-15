import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './views/home/index/index.component';
import { ReservationComponent } from './views/reservation/reservation.component';
import { CheckPriceComponent } from './views/check-price/check-price.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { TeamComponent } from './views/home/team/team.component';
import { PricingComponent } from './views/home/pricing/pricing.component';
import { PortfolioComponent } from './views/home/portfolio/portfolio.component';
import { FaqComponent } from './views/home/faq/faq.component';
import { ContactComponent } from './views/home/contact/contact.component';
import {TokenInterceptorService} from "./services/token-interceptor/token-interceptor.service";
import {AuthService} from "./services/auth/auth.service";
import {AuthGuardService} from "./services/auth-guard/auth-guard.service";
import {ErrorInterceptorService} from "./services/error-interceptor/error-interceptor.service";
import { LoginComponent } from './views/auth/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import {FaqService} from "./services/faq/faq.service";
import {EmailService} from "./services/email/email.service";
import { DashboardComponent } from './views/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ReservationComponent,
    CheckPriceComponent,
    TeamComponent,
    PricingComponent,
    PortfolioComponent,
    FaqComponent,
    ContactComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    FaqService,
    EmailService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
