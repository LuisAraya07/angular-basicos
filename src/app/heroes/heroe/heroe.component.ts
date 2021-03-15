import { Component } from '@angular/core';


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    // tslint:disable-next-line: no-inferrable-types
    nombre: string = 'Ironman';
    // tslint:disable-next-line: no-inferrable-types
    edad: number = 45;


    // tslint:disable-next-line: typedef-whitespace
    public get nombreCapitalizado() : string {
        return this.nombre.toUpperCase();
    }


    obtenerNombre(): string{
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre(): void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void{
        this.edad = 30;
    }
}
