import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'demo-page-test',
  templateUrl: './test.page.html'
})
export class TestPage implements OnInit {
  step: number;
  min: number;
  max: number;
  value: number;

  event: any;

  constructor() {
  }

  ngOnInit(): void {
    this.step = 5;
    this.min = 10;
    this.max = 200;

    this.value = 85;
  }
}
