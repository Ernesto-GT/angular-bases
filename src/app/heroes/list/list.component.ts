import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  //Arreglo auxiliar para la estructura *ngFor
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor']
  //Propiedad auxiliar que almacenara el Heroe elimiando
  public deletedHero?: string;

  removeLastHero():void{
    //El metodo pop elimina y devuelve el ultimo elemento de un arreglo
     this.deletedHero = this.heroNames.pop();
    //console.log({this.deletedHero})
  }
}
