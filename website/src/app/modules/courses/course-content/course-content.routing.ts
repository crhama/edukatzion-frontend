import { Route } from "@angular/router";
import { 
    CourseContentComponent 
} from "./components/course-content/course-content.component";

export const CourseContentRouting: Route[] = [
    {
        path: ':id',
        component: CourseContentComponent,
        children: [

        ]
    }

]