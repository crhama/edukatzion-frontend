import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { PaginationViewModel } from "app/shared/+state/models/pagination.model";
import * as fromActions from '../actions/course-catalog.actions';
import { CourseCatalogItemViewModel } from "../models/course-management.model";

export const COURSE_CATALOG_KEY = 'courseCatalog';

export interface CourseCatalogState extends EntityState<CourseCatalogItemViewModel> {
    courseCatalogLoaded: boolean;
    pagination: PaginationViewModel;
    selectId: string | null;
}

export function selectUserId(a: CourseCatalogItemViewModel): string {
    //In this case this would be optional since primary key is id
    return a.id;
}

export const adapter: EntityAdapter<CourseCatalogItemViewModel>
    = createEntityAdapter<CourseCatalogItemViewModel>({
        selectId: selectUserId
    });

export const initialState: CourseCatalogState = adapter.getInitialState({
    courseCatalogLoaded: false,
    pagination: { pageIndex: 0, pageSize: 0, length: 0 },
    selectId: ''
})

export const courseCatalogReducer = createReducer(
    initialState,
    on(fromActions.loadCourseCatalogSuccess, (state, { courseCatalogResult }) => {
        return adapter.setAll(
            courseCatalogResult.courseCatalog,
            {
                ...state,
                pagination: courseCatalogResult.pagination,
                courseCatalogLoaded: true
            }
        )
    })
);

// get the selectors
export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();