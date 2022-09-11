import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as fromModels from '../models/course-content.models';
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

  constructor() { }
}
