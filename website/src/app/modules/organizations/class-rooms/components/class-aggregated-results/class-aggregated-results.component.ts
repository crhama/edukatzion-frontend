import { Component, OnInit } from '@angular/core';
import { DkzReadOnlyTableViewModel } from 'app/reusable-components/dkz-read-only-table/models/dkz-read-only-table.models';

export enum DisplayType {
  DKZ_TEXT = 1,
  DKZ_PCT,
  DKZ_CURR_US,
  DKZ_DATE
}

@Component({
  selector: 'app-class-aggregated-results',
  template: `<dkz-read-only-table [data]="data">    
  </dkz-read-only-table>`
})
export class ClassAggregatedResultsComponent implements OnInit {
  data: DkzReadOnlyTableViewModel = {
    columnData: [
      {
        column: 'student',
        label: 'Student',
        type: DisplayType.DKZ_TEXT
      },
      {
        column: 'quiz1',
        label: 'quiz 1',
        type: DisplayType.DKZ_CURR_US
      },
      {
        column: 'quiz2',
        label: 'quiz 2',
        type: DisplayType.DKZ_PCT
      },
      {
        column: 'exam1',
        label: 'exam 1',
        type: DisplayType.DKZ_PCT
      }
    ],
    rows: [
      {
        id: 1,
        student: 'Concept',
        quiz1: 10,
        quiz2: 10,
        exam1: 10
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
