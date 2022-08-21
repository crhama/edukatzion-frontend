import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import * as fromActions from '../actions/student-management.actions';
import { StudentManagementService } from "../services/student-management.service";

@Injectable()
export class StudentManagementEffects {
    constructor(private _actions$: Actions,
        private _service: StudentManagementService) { }

    studentList$ = createEffect(() =>
        this._actions$.pipe(
            ofType(fromActions.requestStudentList),
            mergeMap((action) => this._service
                .getStudentList(action.pChange)
                .pipe(
                    map((studentResult) => fromActions
                        .saveStudentList({ studentResult }))
                ))
        )
    );
}