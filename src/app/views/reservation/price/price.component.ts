import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  id: string = '';
  duration: number = 0;
  players: number = 0;
  price: number = 0;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(res => {
      this.id = res['id'];
      this.duration = res['duration'];
      this.players = res['players'];
    });

    this.price = this.calculatePrice(this.id, this.duration, this.players);
  }

  calculatePrice(id: string, duration: number, players: number): number {

    let price = 0;
    price = this.calculatePricePerPeople(players, price);

    if (duration >= 90) {
      price = this.calculateAdditionalTimePrice(duration, price);
    }

    if (id === 'none') {
      price += price * 15 / 100;
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

  ngOnInit(): void {
  }
}
