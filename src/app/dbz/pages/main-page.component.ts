import { Component } from "@angular/core";
//Importación de la estructura Character
import { Character } from "../interfaces/character.interface";
import { DbzService } from "../services/dbz.service";

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{

  //?Esto se le conoce como Inyeccion de dependencias
  constructor(private dbzService: DbzService){//Al pasar el DbzService como parametro, se le pasan todas las dependencias del servicio
  }

  //Este get va a regresar la lista de personajes almacenada en el servicio dbzService
  get characters(): Character[]{
    //Con esta estructura se retorna una 'copia' de los elementos de la lista
    return [...this.dbzService.characters];
  }

  //Metodo que utiliza la funcion del servicio que elimina un personaje
  onDeleteCharacter(id: string):void{
    this.dbzService.deleteCharacterById(id)
  }

  //Metodo que utiliza la funcion del servicio que agrega un personaje
  addCharacter(character: Character){
    this.dbzService.onNewCharacter(character)
  }

}
