import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import * as fromModels from "../models/course-content.models";
import * as fromActions from "../actions/course-content.actions";

export const COURSE_CONTENT_KEY = 'courseContent';

export interface CourseContentState 
    extends EntityState<fromModels.CourseStepViewModel> {
    courseContentLoaded: boolean;
    currentCourse: fromModels.CourseDetailsViewModel;
    selectedUserId: number;
}

export function selectUserId(a: fromModels.CourseStepViewModel): number {
    //In this case this would be optional since primary key is id
    return a.order;
}

export const adapter: EntityAdapter<fromModels.CourseStepViewModel>
    = createEntityAdapter<fromModels.CourseStepViewModel>({
        selectId: selectUserId
    });

export const initialState: CourseContentState 
    = adapter.getInitialState({
        courseContentLoaded: false,
        currentCourse: undefined,
        selectedUserId: null,
    });

export const courseCatalogReducer = createReducer(
    initialState,
    on(fromActions.loadCourseContentSuccess, (state, {selectedCourse}) => {
        return adapter.setAll(
            selectedCourse.steps,
            {
                ...state,
                currentCourse: selectedCourse.currentCourse,
                courseContentLoaded: true
            }
        )
    })
);

// get the selectors
export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();