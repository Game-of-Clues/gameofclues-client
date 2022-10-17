import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './views/home/index/index.component';
import { ReservationComponent } from './views/reservation/reservation.component';
import { CheckPriceComponent } from './views/check-price/check-price.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TeamComponent } from './views/home/team/team.component';
import { PricingComponent } from './views/home/pricing/pricing.component';
import { PortfolioComponent } from './views/home/portfolio/portfolio.component';
import { ServicesComponent } from './views/home/services/services.component';
import { FaqComponent } from './views/home/faq/faq.component';
import { ContactComponent } from './views/home/contact/contact.component';
import { AboutUsComponent } from './views/home/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ReservationComponent,
    CheckPriceComponent,
    TeamComponent,
    PricingComponent,
    PortfolioComponent,
    ServicesComponent,
    FaqComponent,
    ContactComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
