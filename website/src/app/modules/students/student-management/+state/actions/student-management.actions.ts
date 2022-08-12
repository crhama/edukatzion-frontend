import { createAction, props } from "@ngrx/store";
import { StudentViewModel } from "../models/student-management.models";

export const requestStudentList = createAction(
    '[Student Management] Request Student list'
);

export const saveStudentList = createAction(
    '[Student Management] Save Student list',
    props<{ students: StudentViewModel[]; }>()
);