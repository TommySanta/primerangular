import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tablamultiplicar',
  templateUrl: './tablamultiplicar.component.html',
  styleUrls: ['./tablamultiplicar.component.css']
})
export class TablamultiplicarComponent {
  @ViewChild("cajanumero") cajaNumeroRef!: ElementRef;
  public tabla: Array<{ operacion: string, resultado: number }> = [];

  TablaNumeros(): void {
    const numero = this.cajaNumeroRef.nativeElement.value;
    this.tabla = [];

    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      this.tabla.push({ operacion: `${numero} x ${i}`, resultado });
    }
  }
}
