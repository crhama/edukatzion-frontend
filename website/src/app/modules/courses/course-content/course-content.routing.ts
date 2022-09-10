import { Route } from "@angular/router";
import { 
    CourseContentDetailsComponent 
} from "./components/course-content-details/course-content-details.component";
import { 
    CourseContentComponent 
} from "./components/course-content/course-content.component";

export const CourseContentRouting: Route[] = [
    {
        path: ':id',
        component: CourseContentComponent,
        children: [
            {
                path: '',
                redirectTo: 'details',
                pathMatch: 'full'
            },
            {
                path: 'details',
                component: CourseContentDetailsComponent
            }
        ]
    }

]