//* MODULO PRINCIPAL DE LA APP */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Esto importa el counter Component de la carpeta counter
//import { CounterComponent } from './counter/counter.component';
// import { HeroComponent } from './heroes/hero/hero.component';
// import { ListComponent } from './heroes/list/list.component';
import { CounterModule } from './counter/components/counter.module';
import { heroesModule } from './heroes/heroes.module';

@NgModule({
  //?Cuando se quiere usa un componente ajeno al modulo, se requiere importar la clase

  declarations: [
    AppComponent,
    //CounterComponent,
    //Esta importación se realizo con el comando de creación del componente Hero
    // HeroComponent,
    // ListComponent
  ],
  //?En los imports se colocan los modulos que se desean importar
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Import del modulo counter y heros
    CounterModule,
    heroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

//?Un modulo, no es mas que una clase que tiene un decorador que le da las propiededas de un modulo
export class AppModule { }
