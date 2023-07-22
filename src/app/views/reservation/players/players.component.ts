import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  id: string = '';
  duration: number = 0;
  players: number = 6;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(res => {
      this.id = res['id'];
      this.duration = res['duration'];
    });
  }

  ngOnInit(): void {
  }

  handleMinus() {
    if (this.players > 6) {
      this.players--;
    }
  }
  handlePlus() {
    this.players++;
  }

}
