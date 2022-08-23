import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducer from '../reducers/class-rooms.reducer';

const getClassroomsFeatureState 
    = createFeatureSelector<fromReducer.ClassRoomListState>(
        fromReducer.CLASSROOM_LIST_KEY);

export const selectClassroomList = createSelector(
    getClassroomsFeatureState,
    fromReducer.selectAll
);

export const selectStudentListPagination = createSelector(
    getClassroomsFeatureState,
    state => state.pagination
)