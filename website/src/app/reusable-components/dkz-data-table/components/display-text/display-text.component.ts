import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-text',
  template: `
    <div [ngClass]="cssClass">
      {{ textValue }}
    </div>
  `
})
export class DisplayTextComponent implements OnInit {
  @Input() textValue = '';
  @Input() cssClass = ''

  constructor() { }

  ngOnInit(): void {
  }

}
