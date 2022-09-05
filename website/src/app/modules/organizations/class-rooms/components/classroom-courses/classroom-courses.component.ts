import { Component, Input, OnInit } from '@angular/core';
import { DkzDataListViewModel } from 'app/reusable-components/dkz-data-list/models/dkz-data-list.models';


@Component({
  selector: 'classroom-courses',
  templateUrl: './classroom-courses.component.html',
  styleUrls: ['./classroom-courses.component.scss']
})
export class ClassroomCoursesComponent implements OnInit {
  @Input() coursesModel: DkzDataListViewModel;

  constructor() { }


  /**
   * On init
   */
  ngOnInit(): void {}

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
