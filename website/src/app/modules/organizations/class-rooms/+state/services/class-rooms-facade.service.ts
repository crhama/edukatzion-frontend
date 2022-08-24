import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { DkzDataTableViewModel, PageChangeViewModel } from "app/reusable-components/dkz-data-table/+state/models/dkz-data-table.models";
import { Observable, tap, map } from "rxjs";
import { ClassRoomListState } from "../reducers/class-rooms.reducer";
import * as fromActions from "../actions/class-rooms.actions";
import * as fromSelectors from '../selectors/class-rooms.selectors';
import { convertStudentVmToDkzDtViewModel } from "../helpers/convert-classroom-vm-to-dkz-dt-vm.helper";

@Injectable({
    providedIn: 'root'
})
export class ClassRoomsFacade {
    get classRoomList$(): Observable<DkzDataTableViewModel> {
        return this._store
            .pipe(
                select(fromSelectors.selectClassroomList),
                tap((vm) => console.log('vm (before): ', vm)),
                map((list) => convertStudentVmToDkzDtViewModel(list)),
                tap((vm) => console.log('vm (after): ', vm))
            )
    }


    constructor(private _store: Store<ClassRoomListState>) { }

    
    requestClassRoomList(pChange: PageChangeViewModel = undefined) {
        if(!pChange){
            pChange = {
                pageIndex: 0, 
                pageSize: 5,
                previousPageIndex: 0
            }
        }
        this._store.dispatch(fromActions.requestClassRoomList({ pChange }));
    }
}