import { Injectable } from "@angular/core";
//?uuid es una importación de un paquete externo que se descargo para el manejo de ID's
import { v4 as uuid } from 'uuid';

import { Character } from "../interfaces/character.interface";

//Decorador que proporciona las propiedades correspondientes para considerar la clase como un servicio
@Injectable({
  providedIn: 'root'
})

export class DbzService{

   //Arreglo estatico de los personajes
   public characters: Character[] = [{
    //uudi() es una funciion propia de la importación que nos otrorga un id unico del tipo v4
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 8500
  }];

  //Metodo para agregar un personaje
  onNewCharacter( character: Character):void{

    //variable auxiliar que agrupa los campos ingresados en la variable character y crea un ID propio para el personaje
    const newCharacter: Character = {
      id: uuid(),
      ...character //Este comando hace referencia a agregar todas las propiedades del parametro character
    };


    this.characters.push(newCharacter);

  }
  // //Metodo para eliminar un personaje
  // onDeleteCharacter( index: number){
  //   //splice es un metodo que sirve para sustituir o eliminar un elemento en una posicion determinada
  //   this.characters.splice(index, 1);
  // }

  //Nuevo Metodo para hacer la eliminación del personaje por ID
  deleteCharacterById( id:string ){
    //El arreglo "characters" es igual al mismo arreglo, donde id es dierente al id que se quiere eliminar
    this.characters = this.characters.filter(character => character.id !== id); //Al 're-hacer' el arreglo sin el registro del id que se paso como parametro, se elimina

    console.log(this.characters) //Impresion para comprobar resultados del id en la consola
  }


}
