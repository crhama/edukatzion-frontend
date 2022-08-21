import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-level',
  templateUrl: './stock-level.component.html',
  styleUrls: ['./stock-level.component.scss']
})
export class StockLevelComponent implements OnInit {
  @Input() val: number;
  @Input() highLevel: number;
  @Input() lowLevel: number;

  constructor() { }

  ngOnInit(): void {
  }

}
