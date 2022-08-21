import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-date-time',
  template: `
  <span class="pr-6 whitespace-nowrap">
    {{ val | date:'MMM dd, y'}}
  </span>
  `
})
export class DisplayDateTimeComponent implements OnInit {
  @Input() val: Date;

  constructor() { }

  ngOnInit(): void {
  }

}
