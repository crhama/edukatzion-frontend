import { Component, Input, OnInit } from '@angular/core';
import { DisplayType, DkzReadOnlyColumnViewModel, DkzReadOnlyTableViewModel } from '../../models/dkz-read-only-table.models';

@Component({
  selector: 'dkz-read-only-table',
  templateUrl: './dkz-read-only-table.component.html',
  styleUrls: ['./dkz-read-only-table.component.scss']
})
export class DkzReadOnlyTableComponent implements OnInit {
  columnData!: DkzReadOnlyColumnViewModel[];
  rows!: any[];
  columns!: string[];

  @Input() set data(d: DkzReadOnlyTableViewModel) {
    if (d) {
      this.columnData = d.columnData;
      this.rows = d.rows;
      this.columns = this.columnData.map(c => c.column);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
