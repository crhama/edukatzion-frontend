import { createAction, props } from "@ngrx/store";
import { StudentResultViewModel, StudentViewModel } from "../models/student-management.models";

export const requestStudentList = createAction(
    '[Student Management] Request Student list',
    props<{ pageIndex: number; pageSize: number; }>()
);

export const saveStudentList = createAction(
    '[Student Management] Save Student list',
    props<{ studentResult: StudentResultViewModel; }>()
);