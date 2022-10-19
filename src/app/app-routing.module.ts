import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckPriceComponent } from './views/check-price/check-price.component';
import { IndexComponent } from './views/home/index/index.component';
import { ReservationComponent } from './views/reservation/reservation.component';
import {LoginComponent} from "./views/auth/login/login.component";

const routes: Routes = [
   // home page
   { path: '', component: IndexComponent },

   { path: 'login', component: LoginComponent },

   { path: 'reservation', component: ReservationComponent },

   { path: 'check-price', component: CheckPriceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
