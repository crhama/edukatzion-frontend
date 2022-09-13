import { Component, OnInit } from '@angular/core';

export enum DisplayType {
  DKZ_TEXT = 1,
  DKZ_PCT,
  DKZ_CURR_US,
  DKZ_DATE    
}

@Component({
  selector: 'app-class-aggregated-results',
  templateUrl: './class-aggregated-results.component.html',
  styleUrls: ['./class-aggregated-results.component.scss']
})
export class ClassAggregatedResultsComponent implements OnInit {
  columnData = [
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
  ]
  columns = this.columnData.map(c => c.column);
  rows = [
    {
        id                 : 1,
        student            : 'Concept',
        quiz1              : 10,
        quiz2              : 10,
        exam1              : 10,
        // quiz3              : 10,
        // quiz4              : 10,
        // quiz5              : 10,
        // quiz6              : 10,
        // quiz7              : 10,
        // quiz8              : 10,
        // quiz9              : 10,
        // quiz10              : 10,
        // quiz11              : 10,
        // final              : 10,
        // total              : 14880,
    },
    // {
    //     id                 : 2,
    //     type               : 'Design',
    //     total              : 21080,
    //     expensesAmount     : 17240.34,
    //     expensesPercentage : 81.78,
    //     remainingAmount    : 3839.66,
    //     remainingPercentage: 18.22
    // },
    // {
    //     id                 : 3,
    //     type               : 'Development',
    //     total              : 34720,
    //     expensesAmount     : 3518,
    //     expensesPercentage : 10.13,
    //     remainingAmount    : 31202,
    //     remainingPercentage: 89.87
    // },
    // {
    //     id                 : 4,
    //     type               : 'Extras',
    //     total              : 18600,
    //     expensesAmount     : 0,
    //     expensesPercentage : 0,
    //     remainingAmount    : 18600,
    //     remainingPercentage: 100
    // },
    // {
    //     id                 : 5,
    //     type               : 'Marketing',
    //     total              : 34720,
    //     expensesAmount     : 19859.84,
    //     expensesPercentage : 57.2,
    //     remainingAmount    : 14860.16,
    //     remainingPercentage: 42.8
    // }
];
  constructor() { }

  ngOnInit(): void {
  }

}
