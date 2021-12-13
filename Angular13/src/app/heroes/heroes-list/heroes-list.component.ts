import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css'],
})
export class HeroesListComponent implements OnInit{
  heroesList: string[] = [
    'Spyro',
    'Sheila',
    'Sgt. James Byrd',
    'Bentley',
    'Agent 9',
    'Hunter',
  ];
  deletedHeroes: String[] = Array();

  //Remove all content from the array
  deleteWholeList() {
    console.log("Original Heroes List: " + this.heroesList)

    this.heroesList.forEach(element => {
      this.deletedHeroes.push(element);
    });
    this.heroesList.splice(0, this.heroesList.length)

    console.log("Deleted Heroes List: " + this.deletedHeroes)
    console.log("Current Heroes List: " + this.heroesList)
  }

  //Remove the element from the array whose value matches the 'value parameter'
  //@param: value
  deleteListHeroeByValue(value: string) {
    this.heroesList.splice(this.heroesList.indexOf(value), 1)

  }

  //Remove the element from the array whose index matches the 'index parameter'
  //@param: index
  deleteListHeroeByIndex(index: string) {
    this.heroesList.splice(parseInt(index)-1, 1)
  }

  constructor() {

  }

  ngOnInit(): void {

  }
}
