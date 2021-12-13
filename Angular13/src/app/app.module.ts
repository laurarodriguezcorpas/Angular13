import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { VillainsComponent } from './villains/villains.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HeroeComponent,
    HeroesListComponent,
    VillainsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
