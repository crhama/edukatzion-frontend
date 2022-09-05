import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, mergeMap, Observable, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { requestClassRoomList } from '../actions/class-rooms.actions';
import { ClassroomDescriptionViewModel } from '../models/class-rooms.models';
import { ClassRoomListState } from '../reducers/class-rooms.reducer';
import { selectClassroomDescriptionList, selectClassroomsLoaded } from '../selectors/class-rooms.selectors';

@Injectable({
  providedIn: 'root'
})
export class ClassRoomsResolver implements Resolve<ClassroomDescriptionViewModel[]> {
  loading = false;

  constructor(private _store: Store<ClassRoomListState>) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<ClassroomDescriptionViewModel[]> {

    return this._store.pipe(
      select(selectClassroomsLoaded),
      tap((loaded) => {
        if (!this.loading && !loaded) {
          this.loading = true;
          const pChange = {
            pageIndex: 0,
            pageSize: 5,
            previousPageIndex: 0
          }
          this._store.dispatch(requestClassRoomList({ pChange }))
        }
      }),
      filter((loaded) => loaded),
      switchMap(() => this._store.pipe(
        select(selectClassroomDescriptionList)
      )),
      first(),
      finalize(() => this.loading = false)
    )
  }
}
