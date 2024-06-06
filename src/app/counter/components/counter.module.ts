import { CounterComponent } from "./counter/counter.component";
import { NgModule } from "@angular/core";

//Decorador que Identifica a un Modulo
@NgModule({
  //Identifica los componenetes que participan en el modulo
  declarations: [
    CounterComponent
  ],
  //?Con el export se indica que componentes del modulo se pueden referenciar en el exterior
  exports: [
    CounterComponent
  ]
})

//Clase correspondiente al modulo
export class CounterModule {}
