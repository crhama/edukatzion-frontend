import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromReducer from '../reducers/course-content.reducer';

const getCourseContentFeatureState =
    createFeatureSelector<fromReducer.CourseContentState>(
        fromReducer.COURSE_CONTENT_KEY
    );

export const selectCourseContentLoaded = createSelector(
    getCourseContentFeatureState,
    state => state.courseContentLoaded
)