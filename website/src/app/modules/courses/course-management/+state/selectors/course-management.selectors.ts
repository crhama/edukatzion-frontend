import { createSelector } from '@ngrx/store';
import { getCourseManagementStateFeatureState } from "../reducers/index";
import * as fromReducer from '../reducers/course-catalog.reducer';

const getCourseCatalogFeatureState  = createSelector(
    getCourseManagementStateFeatureState,
    state => state.courseCatalog
)

export const selectCourseCatalog = createSelector(
    getCourseCatalogFeatureState,
    fromReducer.selectAll
)

export const selectCourseCatalogLoaded = createSelector(
    getCourseCatalogFeatureState,
    state => state.courseCatalogLoaded
)