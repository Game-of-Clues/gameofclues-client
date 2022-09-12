import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckPriceComponent } from './views/check-price/check-price.component';
import { IndexComponent } from './views/index/index.component';
import { ReservationComponent } from './views/reservation/reservation.component';

const routes: Routes = [
   // home page
   { path: '', component: IndexComponent },

   { path: 'reservation', component: ReservationComponent },

   { path: 'check-price', component: CheckPriceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
