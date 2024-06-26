import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";



@NgModule({
  //Se declaran las clases que pertenecen al modulo
  declarations: [
    HeroComponent,
    ListComponent
  ],
  //Se exportan las clases que se necesitan fuera del modulo
  exports: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule //Importación necesaria para el uso del ngIF, ngFor, etc.
  ]
})
export class heroesModule{

}
