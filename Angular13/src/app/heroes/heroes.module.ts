import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [HeroesComponent, HeroesListComponent],
  exports: [HeroesComponent, HeroesListComponent],
  imports: [CommonModule],
})
export class HeroesModule {}
