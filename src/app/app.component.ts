//* Este es el Componente Principal de la Aplicacion */
//Import para que la clase pueda considerarse como un componente
import { Component } from '@angular/core';

//?Este Decorador hace que la clase AppComponen se convierta en un Componente
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

//?Angular se maneja en su mayoria por clases iguales a las del curso de TS
export class AppComponent {
  //Esta propiedad indica contiene el titulo mostrada en el html
  public title: string = 'Mi Primera app Angular';

}
