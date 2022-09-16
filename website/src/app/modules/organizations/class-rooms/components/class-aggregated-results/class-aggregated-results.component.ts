import { Component, OnInit } from '@angular/core';
import * as fromModels from 'app/reusable-components/dkz-read-only-table/models/dkz-read-only-table.models';

@Component({
  selector: 'app-class-aggregated-results',
  template: `<dkz-read-only-table [data]="data">    
  </dkz-read-only-table>`
})
export class ClassAggregatedResultsComponent implements OnInit {
  data: fromModels.DkzReadOnlyTableViewModel = {
    title: 'Budget Details',
    columnData: [
      {
        column: 'student',
        label: 'Student',
        type: fromModels.DisplayType.DKZ_TEXT
      },
      {
        column: 'quiz1',
        label: 'quiz 1',
        type: fromModels.DisplayType.DKZ_CURR_US,
        url: 'quiz1'
      },
      {
        column: 'quiz2',
        label: 'quiz 2',
        type: fromModels.DisplayType.DKZ_PCT
      },
      {
        column: 'exam1',
        label: 'exam 1',
        type: fromModels.DisplayType.DKZ_PCT
      }
    ],
    rows: [
      {
        id: 1,
        student: 'Concept',
        quiz1: 10,
        quiz2: 10,
        exam1: 10
      },
      {
        id: 1,
        student: 'Concept',
        quiz1: 10,
        quiz2: 10,
        exam1: 10
      },
      {
        id: 1,
        student: 'Concept',
        quiz1: 10,
        quiz2: 10,
        exam1: 10
      },
      {
        id: 1,
        student: 'Concept',
        quiz1: 10,
        quiz2: 10,
        exam1: 10
      },
      {
        id: 1,
        student: 'Concept',
        quiz1: 10,
        quiz2: 10,
        exam1: 10
      },
      {
        id: 1,
        student: 'Concept',
        quiz1: 10,
        quiz2: 10,
        exam1: 10
      },
      {
        id: 1,
        student: 'Concept',
        quiz1: 10,
        quiz2: 10,
        exam1: 10
      },
      {
        id: 1,
        student: 'Concept',
        quiz1: 10,
        quiz2: 10,
        exam1: 10
      },
      {
        id: 1,
        student: 'Concept',
        quiz1: 10,
        quiz2: 10,
        exam1: 10
      },
      {
        id: 1,
        student: 'Concept',
        quiz1: 10,
        quiz2: 10,
        exam1: 10
      },
      {
        id: 1,
        student: 'Concept',
        quiz1: 10,
        quiz2: 10,
        exam1: 10
      },
      {
        id: 1,
        student: 'Concept',
        quiz1: 10,
        quiz2: 10,
        exam1: 10
      },
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
