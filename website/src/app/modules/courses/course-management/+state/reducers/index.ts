import { combineReducers } from '@ngrx/store';
import * as fromCatalog from '../reducers/course-catalog.reducer';

export const COURSE_MGT_KEY = 'courseManagement';

export interface CourseManagementState {    
    courseCatalog: fromCatalog.CourseCatalogState;
}

export const reducers = combineReducers({
    courseCatalog: fromCatalog.courseCatalogReducer
});