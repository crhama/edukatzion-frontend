import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Category, Course, CourseViewModel } from "../models/course-management.model";
import * as fromData from './data';

@Injectable({
    providedIn: 'root'
})
export class CourseManagementFacade {
  get categories$(): Observable<Category[]>{
    const values = fromData.categories;
    return of(values);
  };

  get courses$(): Observable<CourseViewModel[]>{
    const values = fromData.courseData;
    return of(values);
  };

}