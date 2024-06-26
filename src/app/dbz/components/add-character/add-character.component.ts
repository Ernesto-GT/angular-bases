import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {

  //Este decorador permite que el onNewCharacter tome las propiedades de un Output
  @Output()
  //?EventEmitter es un generico que sirve para emitir un elemento (arrays, strings, numeros, etc.)
  //Con esto se va a poder emitir un objeto del tipo Character en la funcion EventEmitter
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  //Inicialización de variable character con la estructura de la interface Character
  public character: Character = {
    name: '',
    power: 0
  };

  //Metodo para imprimir en pantalla los elementos del presonaje
  emitCharacter():void {
    //Esto nos sirve para hacer debug al codigo desde el navegador cuando se entre a esta función
    //debugger; //Es recomendable usar este comando junto con la extención que permite "codificar" desde chrome

    console.log(this.character)

    //Condicional para comprobar que el tamaño del string no sea 0
    if(this.character.name.length === 0 ) return; //Si el tamaño es = 0, se terminara el metodo
    //Si no es igual a 0, se emitira el caracter
    this.onNewCharacter.emit(this.character)

    //Despues de mostrar el elemento en la consola, se elimina de los text-box
    this.character = { name:'' , power:0 };
  }


}
