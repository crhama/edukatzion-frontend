import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, of } from 'rxjs';
import { CourseContentViewModel } from '../models/course-content.models';
import { demoCourses, demoCourseSteps } from './data';

@Injectable({
  providedIn: 'root'
})
export class CourseContentService {
  apiUrl = `${environment.apiUrl}/CourseContent`;

  constructor(private _http: HttpClient) { }


  loadCourseContent(
    selectedCourseId: string
    ): Observable<CourseContentViewModel> {
    const url = `${this.apiUrl}?id=${selectedCourseId}`;
    return this._http.get<CourseContentViewModel>(url);
  }
}
