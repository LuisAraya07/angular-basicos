import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>
        <h3>La base es: <strong>{{ base }}</strong></h3>


        <button (click) = "acumular( base )">+ {{ base }}</button>

        <span>{{ numero }}</span>

        <button (click) = "acumular( -base )">- {{ base }}</button>


    `
})


export class ContadorComponent{
    // tslint:disable-next-line: no-inferrable-types
    titulo: string = 'Contador App';
    // tslint:disable-next-line: no-inferrable-types
    numero: number = 10;
    // tslint:disable-next-line: no-inferrable-types
    base: number = 5;

    acumular( valor: number ){
        this.numero += valor;
    }

}