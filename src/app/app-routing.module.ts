import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckPriceComponent } from './views/check-price/check-price.component';
import { IndexComponent } from './views/home/index/index.component';
import { ReservationComponent } from './views/reservation/reservation/reservation.component';
import {LoginComponent} from "./views/auth/login/login.component";
import {DashboardComponent} from "./views/dashboard/dashboard.component";
import {DetailsComponent} from "./views/game/details/details.component";
import {DurationComponent} from "./views/reservation/duration/duration.component";
import {PlayersComponent} from "./views/reservation/players/players.component";
import {InformationComponent} from "./views/reservation/information/information.component";
import {CreateComponent} from "./views/game/create/create.component";
import {AuthGuardService} from "./services/auth-guard/auth-guard.service";
import {PriceComponent} from "./views/reservation/price/price.component";

const routes: Routes = [
   // home page
   { path: '', component: IndexComponent },
   { path: 'dashboard', component: DashboardComponent },

   { path: 'auth/login', component: LoginComponent },

   { path: 'reservation', component: ReservationComponent },

   { path: 'check-price', component: CheckPriceComponent },

   { path: 'game/details', component: DetailsComponent },

   { path: 'game/create', component: CreateComponent, canActivate: [AuthGuardService] },

   { path: 'reservation/duration', component: DurationComponent },

   { path: 'reservation/players', component: PlayersComponent },

   { path: 'reservation/price', component: PriceComponent },

   { path: 'reservation/information', component: InformationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
