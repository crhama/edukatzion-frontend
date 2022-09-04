import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { loadCourseCatalogRequest } from 'app/modules/courses/course-management/+state/actions/course-catalog.actions';
import { filter, finalize, first, Observable, of, tap } from 'rxjs';
import { ClassRoomListState } from '../reducers/class-rooms.reducer';
import { selectClassroomsLoaded } from '../selectors/class-rooms.selectors';

@Injectable({
  providedIn: 'root'
})
export class ClassRoomsResolver implements Resolve<boolean> {
  loading = false;

  constructor(private _store: Store<ClassRoomListState>) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    return this._store.pipe(
      select(selectClassroomsLoaded),
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
