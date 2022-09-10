import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseContentComponent } from './components/course-content/course-content.component';
import { RouterModule } from '@angular/router';
import { CourseContentRouting } from './course-content.routing';



@NgModule({
  declarations: [
    CourseContentComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild(CourseContentRouting)
  ]
})
export class CourseContentModule { }
