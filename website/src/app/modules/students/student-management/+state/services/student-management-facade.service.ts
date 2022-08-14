import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import * as fromModels from "../models/student-management.models";
import { StudentListState } from "../reducers/student-management.reducer";
import * as fromActions from '../actions/student-management.actions';
import * as fromSelectors from '../selectors/student-management.selectors';
import * as fromSharedModel from "../models/shared.models";

@Injectable({
    providedIn: 'root'
})
export class StudentManagementFacade {

    get studentList$(): Observable<fromModels.StudentViewModel[]>
    {
        return this._store
            .pipe(select(fromSelectors.selectStudentList))
    }

    get pagination$(): Observable<fromSharedModel.PaginationViewModel> 
    {
        return this._store
            .pipe(select(fromSelectors.selectStudentListPagination))
    }

    constructor(private _store: Store<StudentListState>){}

    
    requesStudentList(pageIndex = 0, pageSize = 5) {
        this._store.dispatch(fromActions.requestStudentList(
            { pageIndex, pageSize }));
    }
}