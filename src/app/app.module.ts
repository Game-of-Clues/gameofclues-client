import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './views/home/index/index.component';
import { ReservationComponent } from './views/reservation/reservation/reservation.component';
import { CheckPriceComponent } from './views/check-price/check-price.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { TeamComponent } from './views/home/team/team.component';
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
import { DetailsComponent } from './views/game/details/details.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { LastComponent } from './views/game/last/last.component';
import { AllComponent } from './views/game/all/all.component';
import { DurationComponent } from './views/reservation/duration/duration.component';
import { PlayersComponent } from './views/reservation/players/players.component';
import { InformationComponent } from './views/reservation/information/information.component';
import { CreateComponent } from './views/game/create/create.component';
import { PriceComponent } from './views/reservation/price/price.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ReservationComponent,
    CheckPriceComponent,
    TeamComponent,
    FaqComponent,
    ContactComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    DetailsComponent,
    RegisterComponent,
    LastComponent,
    AllComponent,
    DurationComponent,
    PlayersComponent,
    InformationComponent,
    CreateComponent,
    PriceComponent
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
