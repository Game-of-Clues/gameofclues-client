import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-check-price',
  templateUrl: './check-price.component.html',
  styleUrls: ['./check-price.component.css']
})
export class CheckPriceComponent implements OnInit {
  duration: number | undefined;
  people: number | undefined;
  type: string | undefined;
  hidden: boolean = true;
  error: boolean = false;
  checkPriceForm: FormGroup;
  price: number | undefined;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient, private route: ActivatedRoute) {
    this.checkPriceForm = this.fb.group({
      duration: ['', Validators.required],
      people: ['', Validators.required, Validators.min(6)],
      type: ['', Validators.required]
    })
  }


  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.duration = params['duration'];
      });
  }

  check(){
    let value = this.checkPriceForm.value;
    if (value.duration == '') {
      this.route.queryParams
      .subscribe(params => {
        value.duration = params['duration'];
      });
    }

    if (value.people >= 6) {
      this.price = calculatePrice(value);
      this.hidden = false;

      console.log(`Total price: ${this.price}`);

      this.people = +value.people;
      this.type = value.type;

      this.checkPriceForm.reset();
    } else {
      this.checkPriceForm.reset();
      this.hidden = true;
      this.error = true;
    }
  }
}

function calculatePrice(value: any) {
  let duration = +value.duration;
  let people = +value.people;
  let type = value.type;
  let price = 0;

  if (people < 6) {
    return 0;
  }

  price = calculatePricePerPeople(people, price);
  console.log(`Price only depending on the count of people: ${price}`);

  if (duration >= 90) {
    price = calculateAdditionalTimePrice(duration, price);
  }
  console.log(`Price depending on duration: ${price}`);

  if (type === 'custom') {
    price = calculateCustomGamePrice(price);
  }
  console.log(`Price depending on type: ${price}`);

  return price;
}

function calculatePricePerPeople(people: number, price: number): number {
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

function calculateAdditionalTimePrice(duration: number, price: number): number {
  price += price / 10;

  if (duration === 120) {
    price += price / 10;
  }

  return price;
}

function calculateCustomGamePrice(price: number): number {
  return price += price * 15 / 100;
}
