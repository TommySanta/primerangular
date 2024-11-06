import { Component, OnInit, DoCheck } from "@angular/core";

@Component({
    selector:"hooks-angular",
    templateUrl: "./hooksangular.component.html"
})

export class HooksAngular implements OnInit {
    public mensaje: string;
    constructor() {
        console.log("Soy el constructor de hooks Angular");
        this.mensaje="Soy Hooks en angular"
    }

    cambiarMensaje(): void{
        this.mensaje="Cambiando en un CLICK!!"
    }

    ngOnInit(): void {
        console.log("Soy el metodo ngOnInit");
    }

    ngDoCheck(): void{
        console.log("Ejecutando método DoCheck")
    }
}