import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  constructor( private dbzService: DbzService ){

  }
  // tslint:disable-next-line: no-output-on-prefix
  // @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  // tslint:disable-next-line: typedef
  agregar(){
    if ( this.nuevo.nombre.trim().length === 0){
      return;
    }
    this.dbzService.addNewCharacter( this.nuevo );
    // this.onNewCharacter.emit( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder: 0
    };
  }
}
