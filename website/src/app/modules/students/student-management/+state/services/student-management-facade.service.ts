import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { StudentViewModel } from "../models/student-management.models";
import { StudentListState } from "../reducers/student-management.reducer";
import * as fromActions from '../actions/student-management.actions';
import * as fromSelectors from '../selectors/student-management.selectors';

@Injectable({
    providedIn: 'root'
})
export class StudentManagementFacade {

    get studentList$(): Observable<StudentViewModel[]>
    {
        return this._store
            .pipe(select(fromSelectors.selectStudentList))
    }

    constructor(private _store: Store<StudentListState>){}

    
    requesStudentList() {
        this._store.dispatch(fromActions.requestStudentList());
    }
}