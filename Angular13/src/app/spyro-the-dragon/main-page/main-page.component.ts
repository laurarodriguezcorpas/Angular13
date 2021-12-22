import { Component, OnInit } from '@angular/core';

interface Character {
  name: string;
  power: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  newCharacter: Character = {
    name: '',
    power: 0,
  };

  constructor() {}

  ngOnInit(): void {}

  add() {
    console.log(this.newCharacter);
  }

  changeName(event: any) {
    this.newCharacter.name = event.target.value;
    console.log(this.newCharacter);
  }
}
