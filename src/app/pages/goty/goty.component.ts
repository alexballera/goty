import { Component, OnInit } from '@angular/core';
import { GameService } from './../../services/game.service';
import { Game } from './../../interfaces/interfaces';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.scss']
})
export class GotyComponent implements OnInit {

  juegos: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getNominados()
    .subscribe(games => {
      console.log(games);
      this.juegos = games;
    })
  }

}
