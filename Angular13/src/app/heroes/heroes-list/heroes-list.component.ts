import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css'],
})
export class HeroesListComponent implements OnInit {
  heroesList: string[] = [
    'Spyro',
    'Sheila',
    'Sgt. James Byrd',
    'Bentley',
    'Agent 9',
    'Hunter',
  ];
  deletedHeroes: String[] = [];

  constructor() {}

  ngOnInit(): void {}

  //Remove all content from the array
  deleteWholeList() {
    console.log('Original Heroes List: ' + this.heroesList);

    this.heroesList.forEach((element) => {
      this.deletedHeroes.push(element);
    });
    this.heroesList.splice(0, this.heroesList.length);

    console.log('Deleted Heroes List: ' + this.deletedHeroes);
    console.log('Current Heroes List: ' + this.heroesList);
  }

  //Remove the element from the array whose value matches the 'value parameter'
  //@param: value
  deleteListHeroeByValue(value: string) {
    //When searches a value and not found in array, sets index = -1
    var valueIndex = this.heroesList.indexOf(value);
    if (value != '') {
      if (valueIndex != -1)
        //so we exclude the -1 index position
        this.heroesList.splice(valueIndex, 1);
    }
  }

  //Remove the element from the array whose index matches the 'index parameter'
  //@param: index
  deleteListHeroeByIndex(index: string) {
    //When searches a value and not found in array, sets index = -1
    var valueIndex = this.heroesList.indexOf(index);
    if (index != '') {
      if (valueIndex != -1)
        //so we exclude the -1 index position
        this.heroesList.splice(parseInt(index) - 1, 1);
    }
  }

  /* //Remove the last element added to array
  deleteLastItemAddedt() {
    this.heroesList.pop();
  } */

  //Returns every key-value pair from specified array
  //@param array
  //@return keyValueArray;
  getEveryKeyValuePair(array: String[]) {
    var keyValueArray = new Array();
    var iterator = array.entries();

    for (let element of iterator) {
      keyValueArray.push(element);
    }
    console.log(keyValueArray);
    return keyValueArray;
  }

  //Dummy function used for testing code
  testFunction(array: String[]) {}
}
