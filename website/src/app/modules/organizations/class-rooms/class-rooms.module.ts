import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { classRoomsRoutes } from './class-rooms.routing';
import { ClassRoomsComponent } from './components/class-rooms/class-rooms.component';
import { DkzDataTableModule } from 'app/reusable-components/dkz-data-table/dkz-data-table.module';



@NgModule({
  declarations: [
    ClassRoomsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(classRoomsRoutes),

    DkzDataTableModule
  ]
})
export class ClassRoomsModule { }
