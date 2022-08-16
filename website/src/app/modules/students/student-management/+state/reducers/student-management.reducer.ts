import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { StudentViewModel } from "../models/student-management.models";
import * as fromActions from '../actions/student-management.actions';
import { PaginationViewModel } from "app/shared/+state/models/pagination.model";

export const STUDENT_LIST_KEY = 'studentList';

export interface StudentListState extends EntityState<StudentViewModel> {
    pagination: PaginationViewModel;
    selectId: string | null;
}

export function selectUserId(a: StudentViewModel): string {
    //In this case this would be optional since primary key is id
    return a.studentId;
}

export const adapter: EntityAdapter<StudentViewModel>
    = createEntityAdapter<StudentViewModel>({
        selectId: selectUserId
    });

export const initialState: StudentListState = adapter.getInitialState({
    pagination: { pageIndex: 0, pageSize: 0, length: 0 },
    selectId: ''
})

export const studentListReducer = createReducer(
    initialState,
    on(fromActions.saveStudentList, (state, { studentResult }) => {
        return adapter.setAll(
            studentResult.students, 
            {
                ...state,
                pagination: studentResult.pagination
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