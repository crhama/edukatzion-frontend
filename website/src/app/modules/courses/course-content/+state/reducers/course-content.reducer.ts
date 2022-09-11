import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer } from "@ngrx/store";
import * as fromModels from "../models/course-content.models";

export const COURSE_CATALOG_KEY = 'courseCatalog';

export interface CourseStepState 
    extends EntityState<fromModels.CourseStepViewModel> {
    currentCourse: fromModels.CourseDetailsViewModel
}

// export function selectUserId(a: CourseCatalogItemViewModel): string {
//     //In this case this would be optional since primary key is id
//     return a.id;
// }

export const adapter: EntityAdapter<fromModels.CourseStepViewModel>
    = createEntityAdapter<fromModels.CourseStepViewModel>();

export const initialState: CourseStepState 
    = adapter.getInitialState({
        currentCourse: undefined
    });

export const courseCatalogReducer = createReducer(
    initialState
);

// get the selectors
export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();