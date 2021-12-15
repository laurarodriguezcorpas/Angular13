import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
<<<<<<< HEAD
  declarations: [AppComponent],
  imports: [BrowserModule, HeroesModule],
=======
  declarations: [AppComponent, HeroesModule],
  imports: [BrowserModule],
>>>>>>> 8b08b183325d2a900751afb2388dcef859baf95d
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
