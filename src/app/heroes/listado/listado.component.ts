import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Hulk', 'Spiderman'];
  heroesBorrados: string[] = [];

  borrarHeroe(): void{
    const heroeBorrado: string = this.heroes.shift() || 'NONE';
    this.heroesBorrados.push(heroeBorrado);
  }
}
