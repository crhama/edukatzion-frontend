import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-status',
  template: `
    <div class="hidden lg:block">
      <ng-container *ngIf="active">
          <mat-icon
              class="text-green-400 icon-size-5"
              [svgIcon]="'heroicons_solid:check'"></mat-icon>
      </ng-container>
      <ng-container *ngIf="!active">
          <mat-icon
              class="text-gray-400 icon-size-5"
              [svgIcon]="'heroicons_solid:x'"></mat-icon>
      </ng-container>
  </div>
  `
})
export class ActiveStatusComponent implements OnInit {
  @Input() active: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
