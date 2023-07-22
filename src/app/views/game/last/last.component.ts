import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Game} from "../../../models/Game";
import {GameService} from "../../../services/game/game.service";

@Component({
  selector: 'app-last',
  templateUrl: './last.component.html',
  styleUrls: ['./last.component.css']
})

export class LastComponent implements OnInit {

  games: Array<Game>;

  constructor(private gameService: GameService, private router: Router) {
    this.games = [];
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.gameService.getAll().subscribe(res => {
      this.games = res;
    })
  }

}
