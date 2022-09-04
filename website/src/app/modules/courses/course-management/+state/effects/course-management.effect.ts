import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CourseManagementService } from "../services/course-management.service";
import * as fromActions from "../actions/course-catalog.actions";
import { mergeMap, map } from "rxjs";

@Injectable()
export class CourseManagementEffect {
    constructor(private _actions$: Actions,
        private _service: CourseManagementService) { }

    readonly loadCourseCatalog$ = createEffect(() =>
        this._actions$.pipe(
            ofType(fromActions.loadCourseCatalogRequest),
            mergeMap(() => this._service
                .loadCourseCatalog().pipe(
                    map((courseCatalog) => fromActions.loadCourseCatalogSuccess({
                        courseCatalogResult: courseCatalog
                    }))
                )

            )
        )
    )
}