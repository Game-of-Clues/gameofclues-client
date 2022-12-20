import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value = 6;

  handleMinus() {
    if (this.value > 6) {
      this.value--;
    }
  }
  handlePlus() {
    this.value++;
  }

}
