import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { classRoomsRoutes } from './class-rooms.routing';
import { ClassRoomsComponent } from './components/class-rooms/class-rooms.component';



@NgModule({
  declarations: [
    ClassRoomsComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild(classRoomsRoutes)
  ]
})
export class ClassRoomsModule { }
