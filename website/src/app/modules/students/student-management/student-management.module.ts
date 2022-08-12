import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentManagementComponent } from './components/student-management/student-management.component';
import { RouterModule } from '@angular/router';
import { studentManagementRoutes } from './student-management.routing';
import { StudentListComponent } from './components/student-list/student-list.component';



@NgModule({
  declarations: [
    StudentManagementComponent,
    StudentListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(studentManagementRoutes),
  ]
})
export class StudentManagementModule { }
