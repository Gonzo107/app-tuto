import { Component, OnInit } from "@angular/core";

import { levels } from "./../level.service";

@Component({
  selector: "app-level-container",
  templateUrl: "./level-container.component.html",
  styleUrls: ["./level-container.component.css"]
})
export class LevelContainerComponent implements OnInit {
  niveles = levels;

  selecciones = [];

  constructor() {}

  ngOnInit() {}

  clickImg(nivel, imagen) {
    this.selecciones[nivel] = imagen;

    console.log({ a: this.resultados, b: this.selecciones });
  }

  get resultados() {
    return this.selecciones.reduce(
      (acc, value) => ({
        sidney: acc.sidney + value.sidney,
        melbourne: acc.melbourne + value.melbourne,
        brisbane: acc.brisbane + value.brisbane
      }),
      { sidney: 0, melbourne: 0, brisbane: 0 }
    );
  }

  get ganador() {
    const finales = this.resultados;
    let mayor = Object.keys(finales)[0];

    Object.keys(finales).forEach(element => {
      if (finales[element] > finales[mayor]) {
        mayor = element;
      }
    });

    return mayor;
  }
}
