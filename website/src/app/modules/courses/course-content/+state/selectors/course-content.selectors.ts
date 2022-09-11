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

export const selectCourseSteps = createSelector(
    getCourseContentFeatureState,
    fromReducer.selectAll
)

export const selectCurrentCourse = createSelector(
    getCourseContentFeatureState,
    state => state.currentCourse
)

export const selectCourseContentDetails = createSelector(
    selectCurrentCourse,
    selectCourseSteps,
    (currentCourse, steps) => { 
        return {
            ...currentCourse, 
            steps: steps
        } 
    }
)