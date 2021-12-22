import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { SpyroTheDragonModule } from './spyro-the-dragon/spyro-the-dragon.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeroesModule, SpyroTheDragonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
