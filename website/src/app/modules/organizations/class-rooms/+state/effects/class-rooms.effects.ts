import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import * as fromActions from '../actions/class-rooms.actions';
import { ClassRoomsService } from "../services/class-rooms.service";

@Injectable()
export class ClassRoomsEffects {
    constructor(private _actions$: Actions,
        private _service: ClassRoomsService){}

    readonly classRoomList$ = createEffect(() =>
        this._actions$.pipe(
            ofType(fromActions.requestClassRoomList),
            mergeMap((action) => this._service
                .requestClassRoomList(action.pChange)
                .pipe(
                    map((classroomResult) => fromActions
                        .ClassRoomListSuccess({classroomResult}))
                )
        ))
    )
}