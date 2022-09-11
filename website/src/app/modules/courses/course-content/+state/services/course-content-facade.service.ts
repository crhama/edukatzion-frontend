import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of, tap } from 'rxjs';
import * as fromModels from '../models/course-content.models';
import { CourseContentState } from '../reducers/course-content.reducer';
import { selectCourseContentDetails } from '../selectors/course-content.selectors';
import { demoCategories, demoCourses } from './data';

@Injectable({
  providedIn: 'root'
})
export class CourseContentFacade {

  get categories$(): Observable<fromModels.CategoryViewModel[]> {
    return of(demoCategories);
  };

  get course$(): Observable<fromModels.CourseDetailsViewModel> {
    return of(demoCourses[0]);
  };

  get selectedCourse$()
    : Observable<fromModels.CourseDetailsViewModel>{
      return this._store.pipe(
        select(selectCourseContentDetails)
      );
  }

  constructor(private _store: Store<CourseContentState>) { }
}
