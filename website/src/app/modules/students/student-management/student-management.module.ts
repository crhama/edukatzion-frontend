import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentManagementComponent } from './components/student-management/student-management.component';
import { RouterModule } from '@angular/router';
import { studentManagementRoutes } from './student-management.routing';
import { StudentListComponent } from './components/student-list/student-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from 'app/shared/shared.module';



@NgModule({
  declarations: [
    StudentManagementComponent,
    StudentListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(studentManagementRoutes),
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSortModule,
    MatTableModule,
    NgApexchartsModule,
    SharedModule
  ]
})
export class StudentManagementModule { }
