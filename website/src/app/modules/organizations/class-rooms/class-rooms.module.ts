import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { classRoomsRoutes } from './class-rooms.routing';
import { ClassRoomsComponent } from './components/class-rooms/class-rooms.component';
import { DkzDataTableModule } from 'app/reusable-components/dkz-data-table/dkz-data-table.module';
import { StoreModule } from '@ngrx/store';
import * as fromReducer from './+state/reducers/class-rooms.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ClassRoomsEffects } from './+state/effects/class-rooms.effects';
import { ClassroomDetailsComponent } from './components/classroom-details/classroom-details.component';
import { ClassroomStudentsComponent } from './components/classroom-students/classroom-students.component';
import { ClassroomCoursesComponent } from './components/classroom-courses/classroom-courses.component';
import { ClassroomDescriptionComponent } from './components/classroom-description/classroom-description.component';
import { DkzDrawerDetailsModule } from 'app/reusable-components/dkz-drawer-details/dkz-drawer-details.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DkzDataListModule } from 'app/reusable-components/dkz-data-list/dkz-data-list.module';


@NgModule({
  declarations: [
    ClassRoomsComponent,
    ClassroomDetailsComponent,
    ClassroomStudentsComponent,
    ClassroomCoursesComponent,
    ClassroomDescriptionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(classRoomsRoutes),

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    FuseAlertModule,
    MatPaginatorModule,
    SharedModule,

    
    DkzDataTableModule,
    DkzDrawerDetailsModule,
    DkzDataListModule,

    StoreModule.forFeature(
      fromReducer.CLASSROOM_LIST_KEY,
      fromReducer.classroomListReducer
    ),

    EffectsModule.forFeature([ClassRoomsEffects])
  ]
})
export class ClassRoomsModule { }
