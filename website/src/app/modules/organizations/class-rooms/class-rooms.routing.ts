import { Route } from "@angular/router";
import { ClassRoomsResolver } from "./+state/resolvers/class-rooms.resolver";
import { ClassRoomsComponent } from "./components/class-rooms/class-rooms.component";
import { ClassroomDetailsComponent } from "./components/classroom-details/classroom-details.component";

export const classRoomsRoutes: Route[] = [
    {
        path: '',
        component: ClassRoomsComponent,
        resolve: {
            classRoomsResolvedData: ClassRoomsResolver
        }
    },
    {
        path: 'details',
        component: ClassroomDetailsComponent,
        resolve: {
            classRoomsResolvedData: ClassRoomsResolver
        }
    }
];