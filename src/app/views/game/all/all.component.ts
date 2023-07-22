import { Component, OnInit } from '@angular/core';
import {Game} from "../../../models/Game";
import {GameService} from "../../../services/game/game.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

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
