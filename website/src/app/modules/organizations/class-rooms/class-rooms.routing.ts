import { Route } from "@angular/router";
import { ClassRoomsComponent } from "./components/class-rooms/class-rooms.component";
import { ClassroomDetailsComponent } from "./components/classroom-details/classroom-details.component";

export const classRoomsRoutes: Route[] = [
    {
        path: '',
        component: ClassRoomsComponent,
    },
    {
        path: 'details',
        component: ClassroomDetailsComponent
    }
];