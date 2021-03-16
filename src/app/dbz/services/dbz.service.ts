import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

    // tslint:disable-next-line: variable-name
    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegetta',
          poder: 7500
        }
      ];
      nuevo: Personaje = {
        nombre: 'Roshi',
        poder: 100
      };


    

    get personajes(): Personaje[] {
        return [...this._personajes];
    }
    
    
    constructor(){
    }

    addNewCharacter( personaje: Personaje ): void{
        // tslint:disable-next-line: no-debugger
        this._personajes.push(personaje);
    }

    
}
