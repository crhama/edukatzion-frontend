import { Route } from "@angular/router";
import { ClassRoomsResolver } from "./+state/resolvers/class-rooms.resolver";
import { ClassAggregatedResultsComponent } from "./components/class-aggregated-results/class-aggregated-results.component";
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
        path: ':id/details',
        component: ClassroomDetailsComponent,
        resolve: {
            classRoomsResolvedData: ClassRoomsResolver
        }
    },
    {
        path: ':id/results',
        component: ClassAggregatedResultsComponent
    }
];