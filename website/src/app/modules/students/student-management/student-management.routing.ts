import { Route } from "@angular/router";
import { StudentListComponent } from "./components/student-list/student-list.component";
import { StudentManagementComponent } from "./components/student-management/student-management.component";

export const studentManagementRoutes: Route[] = [
    {
        path     : '',
        component: StudentManagementComponent,
        children: [
            {
                path: 'list',
                component: StudentListComponent
            }
        ]
    }
];
