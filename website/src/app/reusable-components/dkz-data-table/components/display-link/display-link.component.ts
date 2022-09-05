import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-link',
  template: `<div [ngClass]="cssClass">
    <a [routerLink]="[linkValue]" 
      class="text-blue-600 visited:text-purple-600" >
      {{ val }}
    </a>  
</div>`
})
export class DisplayLinkComponent implements OnInit {
  @Input() val = '';
  @Input() cssClass = '';
  @Input() linkValue = '';

  constructor() { }

  ngOnInit(): void {
  }

}
