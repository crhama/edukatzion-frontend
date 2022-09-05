import { Component, Input, OnInit } from '@angular/core';
import { DkzDataListViewModel } from 'app/reusable-components/dkz-data-list/models/dkz-data-list.models';

@Component({
  selector: 'classroom-students',
  templateUrl: './classroom-students.component.html',
  styleUrls: ['./classroom-students.component.scss']
})
export class ClassroomStudentsComponent implements OnInit {
  @Input() studentsModel: DkzDataListViewModel;
  
  constructor() { }
  
  /**
   * On init
   */
  ngOnInit(): void {
    
  }

   /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
    trackByFn(index: number, item: any): any {
      return item.id || index;
    }
}
