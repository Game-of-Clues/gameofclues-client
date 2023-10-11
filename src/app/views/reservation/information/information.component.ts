import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ReservationService} from "../../../services/reservation/reservation.service";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  reservationForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private route: ActivatedRoute, 
    private router: Router, 
    private reservationService: ReservationService) {
    this.reservationForm = this.fb.group({
      gameId: ['', Validators.required],
      duration: ['', Validators.required],
      players: ['', Validators.required],
      price: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  ngOnInit() {}

  reserve(){
    let value = this.reservationForm.value;

    this.route.queryParams
      .subscribe(params => {
        value.gameId = params['id'];
        value.duration = params['duration'];
        value.players = params['players'];
        value.price = params['price'];
      });

    this.reservationService.create(value).subscribe(res => {
      console.log(res);
      
      this.router.navigate(
        ['/reservation/confirmation'],
        { queryParams: { id: res}}
      );
    });
  }
}
