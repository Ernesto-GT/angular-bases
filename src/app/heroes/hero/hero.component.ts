//* Este Componente se Genero con el comando ng g c heroes/hero */

//El comando creo la importación para hacer componente a la calse
import { Component } from '@angular/core';

//Creo un decorador con un selector, tempalteURL y styleURL
@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

//El comando genero la clase HeroComponent
export class HeroComponent {

  //Propiedades para la lista de caracteristicas de un heroe
  public name: string = 'ironman';
  public age: number = 45;

  //?Los get son una propiedad que sirve como funcion(?)
  get capitalizedName():string{
    return this.name.toUpperCase(); //Es un metodo propio de los strings que colocan en mayusculas el texto
  }

  //?Las direfencia entre un metodo y una propiedad, es que estos son invocados por medio de parentesis
  //Metodo para concatenar el nombre y la edad del heroe
  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  //TODO: Tarea - Crear funciones que cambien en nombre y edad del heroe
  //Una forma de hacer desaparecer el boton es con una varibale auxiliar
  public aux_name: boolean = true;
  //Metodo que modifica el nombre del heroe, cambiando la var aux para que deje de mostrarse el boton
  changeHero():void{
    this.name = 'Spiderman'
    this.aux_name = false;
  }
  //Metodo que modifica la edad del heroe
  changeAge():void{
    this.age = 20
  }

  //Metodo que regresa los valores iniciales de las propiedades
  resetForm():void{
    this.name = 'ironman';
    this.age = 45;
    //Es necesario tambien modificar la variable aux para volver a ver el primer boton
    this.aux_name = true;

    //?Esta clase de cambios no tendrian retorno, ya que al seleccionar las otras opciones o dar reset, el titulo siempre estaria cambiado
    //Comando para cambiar el primer h1 y colocarle otro titulo
    //Con el querySelector se hace que solo se cambie el primer h1
    //document.querySelector('h1')!.innerHTML = '<h1>Hola Desde Angular<h1>'

    //Con el All y el forEach se le cambia el titulo a cada h1 en el html
    // document.querySelectorAll('h1')!.forEach( element =>{
    //   element.innerHTML = '<h1>Hola Desde Angular<h1>'
    // })
  }

}
