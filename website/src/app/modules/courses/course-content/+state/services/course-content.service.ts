import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CourseContentViewModel } from '../models/course-content.models';
import { demoCourses, demoCourseSteps } from './data';

@Injectable({
  providedIn: 'root'
})
export class CourseContentService {

  constructor() { }


  loadCourseContent(
    selectedCourseId: string
    ): Observable<CourseContentViewModel> {
    const obj: CourseContentViewModel = {
      currentCourse: demoCourses[0],
      steps: demoCourseSteps
    }

    return of(obj);
  }
}
