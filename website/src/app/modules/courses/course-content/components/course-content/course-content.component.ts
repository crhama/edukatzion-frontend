import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-content',
  template: `<router-outlet></router-outlet>`
})
export class CourseContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
