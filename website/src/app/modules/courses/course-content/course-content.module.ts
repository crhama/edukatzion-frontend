import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseContentComponent } from './components/course-content/course-content.component';
import { RouterModule } from '@angular/router';
import { CourseContentRouting } from './course-content.routing';
import { CourseContentDetailsComponent } from './components/course-content-details/course-content-details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseFindByKeyPipeModule } from '@fuse/pipes/find-by-key';
import { SharedModule } from 'app/shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { StoreModule } from '@ngrx/store';
import * as fromReducer from './+state/reducers/course-content.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CourseContentEffects } from "./+state/effects/course-content.effects";


@NgModule({
  declarations: [
    CourseContentComponent,
    CourseContentDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CourseContentRouting),
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTooltipModule,
    FuseFindByKeyPipeModule,
    SharedModule,
    MatTabsModule,

    StoreModule.forFeature(
      fromReducer.COURSE_CONTENT_KEY,
      fromReducer.courseCatalogReducer),
    EffectsModule.forFeature([CourseContentEffects])
  ]
})
export class CourseContentModule { }
