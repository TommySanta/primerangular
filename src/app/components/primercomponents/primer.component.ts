import { Component } from "@angular/core";

@Component({
    selector:"primer-component",
    templateUrl: "./primer.component.html",
    styleUrls:["./primer.component.css"]
})

export class PrimerComponent {
    public titulo: string;
    public descripcion: string;
    public anio: number;

    constructor(){
        this.titulo="Hoy es miercoles";
        this.descripcion="Y el cuerpo lo sabe";
        this.anio=2024;
        
    }
}