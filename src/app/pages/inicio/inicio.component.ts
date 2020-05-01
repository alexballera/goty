import { Game } from './../../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  juegos: any[] = [];

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.db.collection('goty').valueChanges()
    .pipe(
      // map((resp: Game[]) => {
        // return resp.map(juego => {
        //   return {
        //     name: juego.name,
        //     value: juego.votos
        //   };
        // });
      //   return resp.map(({name, votos}) => ({name, value: votos}));
      // })
      map((resp: Game[]) => resp.map(({name, votos}) => ({name, value: votos})))
    )
    .subscribe(resp => {

      this.juegos = resp;

      console.log(resp);
    });
  }

}
