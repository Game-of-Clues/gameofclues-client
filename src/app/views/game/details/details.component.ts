import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GameService} from "../../../services/game/game.service";
import {Game} from "../../../models/Game";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: string = '';
  game: Game | undefined;
  constructor(private route: ActivatedRoute, private gameService: GameService) {
    this.route.queryParams.subscribe(res => {
      this.id = res['id'];

      this.gameService.getGame(this.id).subscribe(res => {
        this.game = res;
        console.log(res);
      })
    });
  }

  ngOnInit(): void {
  }

}
