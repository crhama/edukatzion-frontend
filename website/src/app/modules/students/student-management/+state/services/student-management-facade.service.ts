import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { map, Observable, of, tap } from "rxjs";
import * as fromModels from "../models/student-management.models";
import { StudentListState } from "../reducers/student-management.reducer";
import * as fromActions from '../actions/student-management.actions';
import * as fromSelectors from '../selectors/student-management.selectors';
import { PaginationViewModel } from "app/shared/+state/models/pagination.model";
import { convertStudentVmToDkzDtViewModel } from "../helpers/convert-student-vm-to-dkz-dt-vm.helper";
import { DkzDataTableViewModel } from "app/reusable-components/dkz-data-table/+state/models/dkz-data-table.models";

@Injectable({
    providedIn: 'root'
})
export class StudentManagementFacade {

    get studentList$(): Observable<DkzDataTableViewModel>
    {
        return this._store
            .pipe(
                select(fromSelectors.selectStudentList),
                tap((vm) => console.log('vm (before): ', vm)),
                map((list) => convertStudentVmToDkzDtViewModel(list)),
                tap((vm) => console.log('vm (after): ', vm))
            )
    }

    get pagination$(): Observable<PaginationViewModel> 
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