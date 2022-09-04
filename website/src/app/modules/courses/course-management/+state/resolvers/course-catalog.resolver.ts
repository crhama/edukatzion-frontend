import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, tap, filter, first, finalize } from 'rxjs';
import { CourseCatalogItemViewModel } from '../models/course-management.model';
import { CourseCatalogState } from '../reducers/course-catalog.reducer';
import { loadCourseCatalogRequest } from '../actions/course-catalog.actions';
import { selectCourseCatalogLoaded } from "../selectors/course-management.selectors";

@Injectable({
  providedIn: 'root'
})
export class CourseCatalogResolver implements Resolve<boolean> {
  loading = false;

  constructor(private _store: Store<CourseCatalogState>) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this._store.pipe(
      select(selectCourseCatalogLoaded),
      tap((loaded) => {
        if (!this.loading && !loaded) {
          this.loading = true;
          this._store.dispatch(loadCourseCatalogRequest())
        }
      }),
      filter((loaded) => loaded),
      first(),
      finalize(() => this.loading = false)
    )
  }
}
