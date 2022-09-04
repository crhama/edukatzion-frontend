import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable, of, tap } from "rxjs";
import { Category, CourseCatalogItemViewModel } from "../models/course-management.model";
import { CourseManagementState } from "../reducers";
import * as fromActions from '../actions/course-catalog.actions';
import * as fromSelectors from '../selectors/course-management.selectors';
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
    return this._store.pipe(
      select(fromSelectors.selectCourseCatalog));
  };

  constructor(private _store: Store<CourseManagementState>){}


  loadCourseCatalog() {
    this._store.dispatch(fromActions.loadCourseCatalogRequest());
  }
}