import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { CounterModule } from './counter/counter.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CounterModule],
=======
import { HeroesModule } from './heroes/heroes.module';
import { HeroesComponent } from './heroes/heroes/heroes.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeroesModule],
>>>>>>> 4ebd7f2 ("HeroesModule" module added)
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
