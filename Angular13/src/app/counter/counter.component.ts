import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  title: string;
  number: number;
  base: number;
  constructor() {
    this.title = 'COUNTER';
    this.number = 10;
    this.base = 5;
  }

  ngOnInit(): void {}

  accumulate(value: number) {
    this.number += value;
  }
}
