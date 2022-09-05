import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-text',
  template: `
    <div [ngClass]="cssClass">
      {{ val }}
    </div>
  `
})
export class DisplayTextComponent implements OnInit {
  @Input() val = '';
  @Input() cssClass = ''

  constructor() { }

  ngOnInit(): void {}

}
