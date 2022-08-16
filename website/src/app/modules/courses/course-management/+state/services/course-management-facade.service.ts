import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { Category, CourseCatalogItemViewModel } from "../models/course-management.model";
import { CourseManagementState } from "../reducers";
import * as fromActions from '../actions/course-catalog.actions';
import * as fromData from './data';

@Injectable({
  providedIn: 'root'
})
export class CourseManagementFacade {

  get categories$(): Observable<Category[]> {
    const values = fromData.categories;
    return of(values);
  };

  get courses$(): Observable<CourseCatalogItemViewModel[]> {
    const values = fromData.courseData;
    return of(values);
  };

  constructor(private _store: Store<CourseManagementState>){}


  loadCourseCatalog() {
    this._store.dispatch(fromActions.loadCourseCatalogRequest());
  }
}