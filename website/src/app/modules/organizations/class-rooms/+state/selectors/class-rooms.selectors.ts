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
);

export const selectClassroomsLoaded = createSelector(
    getClassroomsFeatureState,
    state => state.classroomsLoaded
)

export const selectClassroomDescriptionList = createSelector(
    selectClassroomList,
    state => state.map(c => c.descriptionVm)
);


export function selectClassRoomById(id: string) {
    return createSelector(
        selectClassroomList,
        state => state.find(e => e.name === id)
    )
}
