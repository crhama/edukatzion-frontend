import { Route } from "@angular/router";
import { CourseCatalogResolver } from "./+state/resolvers/course-catalog.resolver";
import { CourseManagementComponent } from "./components/course-management/course-management.component";
import { ListComponent } from "./components/list/list.component";

export const courseManagementRoutes: Route[] = [
    {
        path     : '',
        component: CourseManagementComponent,
        children: [
            {
                path: 'list',
                component: ListComponent,
                resolve: { courseCatalog: CourseCatalogResolver }
            }
        ]
    }
];