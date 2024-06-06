import { Component } from "@angular/core";
//import { AppComponent } from "../app.component";

@Component({
  //?El selector sirve para indicar como puedo mostrar el template en el html
  selector: 'app-counter',
  //?Existe el template y el templateURL
  //El normal solicita tolo el string de la vista
  //El URL maneja la ruta del html
  template: `
  <!--El template puede servir para colocar pequeñas secciones de codigo html-->
  <!--Impresion de variable-->
  <h3>Counter: {{counter}}</h3>

  <!--Botones para El contador-->
  <!--?(click) indica que el boton ejecutara tal metodo/accion cuando se oprima el boton-->
  <button (click)="increseBy( +1 )">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="lessenBy( -1 )">-1</button>

  `
})
export class CounterComponent {
  constructor() {


  }
  //Variable auxiliar para almacenar el conteo
  public counter: number = 10;

  //Función que me permite incrementar la propiedad 'counter' en 1
  increseBy( value: number ):void{ //void hace referencia a que la función no regresa nada
    this.counter += 1;
  }
  //Función que disminuye el valor de 'counter'
  lessenBy( value: number ):void{
    this.counter -= 1;
  }
  //Funcion para regresar el valor a 10
  resetCounter():void{
    this.counter = 10;
  }
}
