import { Component, Input, OnInit } from '@angular/core';
import * as fromModels from '../../models/dkz-read-only-table.models';

@Component({
  selector: 'dkz-read-only-table',
  templateUrl: './dkz-read-only-table.component.html',
  styleUrls: ['./dkz-read-only-table.component.scss']
})
export class DkzReadOnlyTableComponent implements OnInit {
  title = '';
  columnData!: fromModels.DkzReadOnlyColumnViewModel[];
  rows!: any[];
  columns!: string[];
  isLoading = false;
  pagination = {
    length: 0,
    page: 0,
    size: 0,
  }

  @Input() set data(d: fromModels.DkzReadOnlyTableViewModel) {
    if (d) {
      this.title = d.title;
      this.columnData = d.columnData;
      this.rows = d.rows;
      this.columns = this.columnData.map(c => c.column);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
