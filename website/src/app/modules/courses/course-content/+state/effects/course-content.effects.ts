import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import * as fromActions from '../actions/course-content.actions';
import { CourseContentService } from '../services/course-content.service';

@Injectable()
export class CourseContentEffects{
    constructor(private _actions$: Actions,
        private _service: CourseContentService){}

    readonly loadCourseContent = createEffect(() =>
        this._actions$.pipe(
            ofType(fromActions.loadCourseContentRequest),
            mergeMap((action) => this._service
                .loadCourseContent(action.selectedCourseId)
                    .pipe(
                        map((selectedCourse) => fromActions
                            .loadCourseContentSuccess({ selectedCourse }))
                    )
                
            )
        )
    );

}