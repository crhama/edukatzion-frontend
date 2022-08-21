import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-money',
  template: `
  <div [ngClass]="cssClass">
      {{ val | currency:'USD':'symbol':'1.2-2'}}
  </div>
  `
})
export class DisplayMoneyComponent implements OnInit {
  @Input() val: number;
  @Input() cssClass: string;

  constructor() { }

  ngOnInit(): void {
  }

}
