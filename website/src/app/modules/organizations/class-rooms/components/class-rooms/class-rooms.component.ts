import { Component, OnInit } from '@angular/core';
import { ComponentType, DkzDataTableViewModel } from 'app/reusable-components/dkz-data-table/+state/models/dkz-data-table.models';

@Component({
  selector: 'app-class-rooms',
  templateUrl: './class-rooms.component.html',
  styleUrls: ['./class-rooms.component.scss']
})
export class ClassRoomsComponent implements OnInit {
  model: DkzDataTableViewModel = {
    tableTitle: 'Inventory',
    headerColumns: [
      { name: 'thumbnail', text: '', cssClass: '' },
      { name: 'sku', text: 'SKU', cssClass: 'hidden md:block' },
      { name: 'name', text: 'Name', cssClass: '' },
      { name: 'price', text: 'Price', cssClass: 'hidden md:block' },
      { name: 'stock', text: 'Stock', cssClass: 'hidden md:block' },
      { name: 'active', text: 'Active', cssClass: 'hidden md:block' }
    ],
    rows: [
      {
        id: '1',
        cells: [
          {
            val: '',
            cssClass: '',
            comp: ComponentType.THUMBNAIL
          },
          {
            val: 'ADP-5745',
            cssClass: 'hidden md:block truncate',
            comp: ComponentType.DISPLAY_TEXT
          },
          {
            val: 'Benton Ladies Automatic Watch 40mm 5 ATM',
            cssClass: 'truncate',
            comp: ComponentType.DISPLAY_TEXT
          },
          {
            val: 1153.20,
            cssClass: 'hidden sm:block',
            comp: ComponentType.DISPLAY_MONEY
          },
          {
            val: 12,
            cssClass: '',
            comp: ComponentType.STOCK_LEVEL
          },
          {
            val: false,
            cssClass: '',
            comp: ComponentType.ACTIVE_STATUS
          }
        ]
      },
      {
        id: '2',
        cells: [
          {
            val: '',
            cssClass: '',
            comp: ComponentType.THUMBNAIL
          },
          {
            val: 'ATV-2569',
            cssClass: 'hidden md:block truncate',
            comp: ComponentType.DISPLAY_TEXT
          },
          {
            val: 'Benton Ladies Automatic Watch 40mm 5 ATM',
            cssClass: 'truncate',
            comp: ComponentType.DISPLAY_TEXT
          },
          {
            val: 1781.00,
            cssClass: 'hidden sm:block',
            comp: ComponentType.DISPLAY_MONEY
          },
          {
            val: 36,
            cssClass: '',
            comp: ComponentType.STOCK_LEVEL
          },
          {
            val: true,
            cssClass: '',
            comp: ComponentType.ACTIVE_STATUS
          }
        ]
      }
    ],
    pagination: {
      length: 23,
      size: 5,
      page: 0,
      lastPage: 2,
      startIndex: 0,
      endIndex: 2
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
