import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StudentListState } from '../reducers/student-management.reducer';
import * as fromReducer from '../reducers/student-management.reducer';

const getStudentManagementFeatureState 
    = createFeatureSelector<StudentListState>(fromReducer.STUDENT_LIST_KEY);

export const selectStudentList = createSelector(
    getStudentManagementFeatureState,
    fromReducer.selectAll
);

export const selectStudentListPagination = createSelector(
    getStudentManagementFeatureState,
    state => state.pagination
)