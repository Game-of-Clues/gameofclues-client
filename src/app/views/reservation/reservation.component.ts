import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  private reservationPath = environment.apiUrl + 'reservation';
  duration: number | undefined;
  people: number | undefined;
  gameType: string | undefined;
  reservationForm: FormGroup;
  price: number | undefined;
  hidden: boolean = true;
  reservationId: Observable<string> | undefined;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient,) { 
    this.reservationForm = this.fb.group({
      duration: ['', Validators.required],
      people: ['', Validators.required],
      gameType: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.duration = params['duration'];
        this.people = params['people'];
        this.gameType = params['type'];
      });
  }

reserve(){
  let value = this.reservationForm.value;
  if (value.duration == '' || value.people == '' || value.gameType == '') {
    this.route.queryParams
    .subscribe(params => {
      value.duration = params['duration'];
      value.people = params['people'];
      value.gameType = params['type'];
    });
  }

  console.log(value);
  console.log(this.reservationPath);
  
  this.http.post<any>(this.reservationPath, value).subscribe(data => this.reservationId = data);
  
  

  this.price = this.calculatePrice(value);
  this.hidden = false;

  
  this.people = +value.people;
  this.gameType = value.gameType;
  
  this.reservationForm.reset();
}

calculatePrice(value: any) {
let duration = +value.duration;
let people = +value.people;
let type = value.gameType;
let price = 0;

if (people < 6) {
  return 0;
}

price = this.calculatePricePerPeople(people, price);

if (duration >= 90) {
  price = this.calculateAdditionalTimePrice(duration, price);
}

if (type === 'custom') {
  price = this.calculateCustomGamePrice(price);
}

return price;
}

calculatePricePerPeople(people: number, price: number): number {
if (people < 8) {
  price += 6 * 13;
} else if ( people < 10) {
  price += 8 * 12;
} else if ( people < 12) {
  price += 10 * 11;
} else if ( people < 14) {
  price += 12 * 10;
} else if ( people < 16) {
  price += 14 * 9;
} else if ( people < 18) {
  price += 16 * 8.5;
} else if ( people < 20) {
  price += 18 * 8;
} else if ( people < 22) {
  price += 20 * 7.5;
} else if ( people < 24) {
  price += 22 * 7.5;
} else {
  price += people * 7;
}

return price;
}

calculateAdditionalTimePrice(duration: number, price: number): number {
price += price / 10;

if (duration === 120) {
  price += price / 10;
}

return price;
}

calculateCustomGamePrice(price: number): number {
return price += price * 15 / 100;
}
}