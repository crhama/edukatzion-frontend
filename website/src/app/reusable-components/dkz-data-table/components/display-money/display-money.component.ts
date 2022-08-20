import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-money',
  template: `
  <div [ngClass]="cssClass">
      {{ currencyValue | currency:'USD':'symbol':'1.2-2'}}
  </div>
  `
})
export class DisplayMoneyComponent implements OnInit {
  @Input() currencyValue: number;
  @Input() cssClass: string;

  constructor() { }

  ngOnInit(): void {
  }

}
