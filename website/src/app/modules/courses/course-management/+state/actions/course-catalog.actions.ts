import { createAction, props } from "@ngrx/store";
import { CourseCatalogResultViewModel } from "../models/course-management.model";

export const loadCourseCatalogRequest = createAction(
    '[COURSE CATALOG] Load Course Catalog Request'
);

export const loadCourseCatalogSuccess = createAction(
    '[COURSE CATALOG] Load Course Catalog Success',
    props<{ courseCatalogResult: CourseCatalogResultViewModel }>()
);