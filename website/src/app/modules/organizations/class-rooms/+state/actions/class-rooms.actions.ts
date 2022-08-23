import { createAction, props } from "@ngrx/store";
import { PageChangeViewModel } from "app/reusable-components/dkz-data-table/+state/models/dkz-data-table.models";
import { ClassroomResultViewModel } from "../models/class-rooms.models";

export const requestClassRoomList = createAction(
    '[CLASS ROOMS] Request Class Room List',
    props<{ pChange: PageChangeViewModel }>()
);

export const ClassRoomListSuccess = createAction(
    '[CLASS ROOMS] Class Room List Success',
    props<{ classroomResult: ClassroomResultViewModel; }>()
);