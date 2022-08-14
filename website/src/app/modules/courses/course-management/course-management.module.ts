import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseManagementComponent } from './components/course-management/course-management.component';
import { RouterModule } from '@angular/router';
import { courseManagementRoutes } from './course-management.routing';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [
    CourseManagementComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(courseManagementRoutes)
  ]
})
export class CourseManagementModule { }
