import { createAction, props } from "@ngrx/store";
import { PageChangeViewModel } from "app/reusable-components/dkz-data-table/+state/models/dkz-data-table.models";
import { StudentResultViewModel, StudentViewModel } from "../models/student-management.models";

export const requestStudentList = createAction(
    '[Student Management] Request Student list',
    props<{ pChange: PageChangeViewModel }>()
);

export const saveStudentList = createAction(
    '[Student Management] Save Student list',
    props<{ studentResult: StudentResultViewModel; }>()
);