import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  //Este decorador indica que el arreglo puede recibir una propiedad
  @Input()
  public characterList: Character[] = [{
    //Este es un valor por defecto, en caso de que no se reciba nada
    name: 'Trunks',
    power: 10
  }];

  @Output()
  //Output para emitir una señal de evento cuando se quiere eliminar un personaje
  onDelete: EventEmitter<string> = new EventEmitter();


  //Metodo para eliminar un personaje
  onDeleteCharacter(id?:string):void { //Como la propiedad id no es obligatoria, se debe indicar que puede o no venir como parametro
    //TODO: Trea - Emitir el ID del personaje

    //Si no pasaron el id como parametro, se concluye el metodo
    if( !id ) return;

    //console.log({{id}})

    //Envia el index como parametro para el evento
    this.onDelete.emit(id)
  }
 }
