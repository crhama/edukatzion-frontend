import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { PaginationViewModel } from "app/shared/+state/models/pagination.model";
import { ClassroomViewModel } from "../models/class-rooms.models";
import * as fromActions from '../actions/class-rooms.actions';

export const CLASSROOM_LIST_KEY = 'clasroomList';

export interface ClassRoomListState extends EntityState<ClassroomViewModel> {
    classroomsLoaded: boolean;
    pagination: PaginationViewModel;
}

export const adapter: EntityAdapter<ClassroomViewModel>
    = createEntityAdapter<ClassroomViewModel>();

export const initialState: ClassRoomListState = adapter.getInitialState({
    classroomsLoaded: false,
    pagination: { pageIndex: 0, pageSize: 0, length: 0 }
})

export const classroomListReducer = createReducer(
    initialState,
    on(fromActions.ClassRoomListSuccess, (state, { classroomResult }) => {
        return adapter.setAll(
            classroomResult.classrooms, 
            {
                ...state,
                pagination: classroomResult.pagination,
                classroomsLoaded: true
            })
    })
);

// get the selectors
export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();