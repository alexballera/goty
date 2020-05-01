import { Component, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.scss']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {
  @Input() results: any[] = [];

  // results: any[] = [
  //   {
  //     name: 'Juego 1',
  //     value: 20
  //   },
  //   {
  //     name: 'Juego 2',
  //     value: 25
  //   },
  //   {
  //     name: 'Juego 3',
  //     value: 15
  //   },
  //   {
  //     name: 'Juego 4',
  //     value: 30
  //   }
  // ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  // intervalo;

  // constructor() {

  //   this.intervalo = setInterval(() => {
  //     const newResults = [...this.results];
  //     for (const i in newResults) {
  //       if (newResults.hasOwnProperty(i)) {
  //         newResults[i].value = Math.round(Math.random() * 100);
  //       }
  //     }

  //     this.results = [...newResults];
  //   }, 1500);
  // }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy() {
    // clearInterval(this.intervalo);
  }
}
