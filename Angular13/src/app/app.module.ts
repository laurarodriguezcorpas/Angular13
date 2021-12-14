import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { HeroesComponent } from './heroes/heroes/heroes.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeroesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
