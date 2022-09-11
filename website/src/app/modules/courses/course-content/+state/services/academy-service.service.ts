import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category, Course } from '../models/course-content.models';
import { demoCategories, demoCourses } from './data';

@Injectable({
  providedIn: 'root'
})
export class AcademyServiceService {
  get categories$(): Observable<Category[]> {
    return of(demoCategories);
  };

  get course$(): Observable<Course> {
    return of(demoCourses[0]);
  };

  constructor() { }
}
