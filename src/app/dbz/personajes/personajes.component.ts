import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  //@Input() personajes: Personaje[] = [];

  // tslint:disable-next-line: typedef
  get personajes(){
    // Este es el getter, no una propiedad del arreglo
    return this.dbzService.personajes;
  }
  constructor( private dbzService: DbzService){
  }


}
