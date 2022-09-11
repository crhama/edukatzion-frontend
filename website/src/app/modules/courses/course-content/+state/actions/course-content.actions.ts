import { createAction, props } from "@ngrx/store";
import { CourseContentViewModel } from "../models/course-content.models";

export const loadCourseContentRequest = createAction(
    '[Course Content] Load Course Content Request',
    props<{ selectedCourseId: string; }>()
)

export const loadCourseContentSuccess = createAction(
    '[Course Content] Load Course Content Success',
    props<{ selectedCourse: CourseContentViewModel; }>()
)