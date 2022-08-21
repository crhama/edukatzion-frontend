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
import { StoreModule } from '@ngrx/store';
import * as fromReducer from '../student-management/+state/reducers/student-management.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StudentManagementEffects } from './+state/effects/student-management.effects';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DkzDataTableModule } from 'app/reusable-components/dkz-data-table/dkz-data-table.module';



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
    MatPaginatorModule,
    SharedModule,

    DkzDataTableModule,

    StoreModule.forFeature(
      fromReducer.STUDENT_LIST_KEY,
      fromReducer.studentListReducer
    ),
    EffectsModule.forFeature([StudentManagementEffects])
  ]
})
export class StudentManagementModule { }
