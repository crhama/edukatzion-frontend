import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, Observable, of, tap } from 'rxjs';
import { loadCourseContentRequest } from '../actions/course-content.actions';
import { CourseContentState } from '../reducers/course-content.reducer';
import { selectCourseContentLoaded } from '../selectors/course-content.selectors';

@Injectable({
  providedIn: 'root'
})
export class CourseContentDetailsResolver implements Resolve<boolean> {
  loading = false;

  constructor(
    private _store: Store<CourseContentState>) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const id = route.paramMap.get('id');

    return this._store.pipe(
      select(selectCourseContentLoaded),
      tap((loaded) => {
        if (!this.loading && !loaded) {
          this.loading = true;
          this._store.dispatch(
            loadCourseContentRequest({ selectedCourseId: id })
          )
        }
      }),
      filter((loaded) => loaded),
      first(),
      finalize(() => this.loading = false)
    )
  }
}
