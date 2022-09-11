import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dkz-read-table',
  templateUrl: './dkz-read-table.component.html',
  styleUrls: ['./dkz-read-table.component.scss']
})
export class DkzReadTableComponent implements OnInit {
  columns = [
    'type', 'total', 'expensesAmount', 'expensesPercentage', 'remainingAmount', 
    'remainingPercentage']
  rows = []
  // [
  //   {
  //     id: 1,
  //     type: 'Concept',
  //     total: 14880,
  //     expensesAmount: 14000,
  //     expensesPercentage: 94.08,
  //     remainingAmount: 880,
  //     remainingPercentage: 5.92
  //   },
  //   {
  //     id: 2,
  //     type: 'Design',
  //     total: 21080,
  //     expensesAmount: 17240.34,
  //     expensesPercentage: 81.78,
  //     remainingAmount: 3839.66,
  //     remainingPercentage: 18.22
  //   },
  //   {
  //     id: 3,
  //     type: 'Development',
  //     total: 34720,
  //     expensesAmount: 3518,
  //     expensesPercentage: 10.13,
  //     remainingAmount: 31202,
  //     remainingPercentage: 89.87
  //   },
  //   {
  //     id: 4,
  //     type: 'Extras',
  //     total: 18600,
  //     expensesAmount: 0,
  //     expensesPercentage: 0,
  //     remainingAmount: 18600,
  //     remainingPercentage: 100
  //   },
  //   {
  //     id: 5,
  //     type: 'Marketing',
  //     total: 34720,
  //     expensesAmount: 19859.84,
  //     expensesPercentage: 57.2,
  //     remainingAmount: 14860.16,
  //     remainingPercentage: 42.8
  //   }
  // ];

  constructor() { }

  ngOnInit(): void {
  }

}
