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
        // const model: DkzDataTableViewModel = {
        //     tableTitle: 'Inventory',
        //     headerColumns: [
        //         { name: 'name', text: 'Name', cssClass: 'hidden md:block' },
        //         { name: 'year', text: 'Year', cssClass: 'hidden md:block' },
        //         { name: 'head', text: 'Head', cssClass: 'hidden md:block' },
        //         { name: 'maxCapacity', text: 'Capacity', cssClass: 'hidden md:block' },
        //         { name: 'currCapacity', text: 'Enrolled', cssClass: 'hidden md:block' }
        //     ],
        //     rows: [
        //         {
        //             id: '1',
        //             cells: [
        //                 {
        //                     val: '1A',
        //                     cssClass: '',
        //                     comp: ComponentType.DISPLAY_TEXT
        //                 },
        //                 {
        //                     val: '2022-2023',
        //                     cssClass: '',
        //                     comp: ComponentType.DISPLAY_TEXT
        //                 },
        //                 {
        //                     val: 'Ellerbrock, Ruth',
        //                     cssClass: '',
        //                     comp: ComponentType.DISPLAY_TEXT
        //                 },
        //                 {
        //                     val: '25',
        //                     cssClass: '',
        //                     comp: ComponentType.DISPLAY_TEXT
        //                 },
        //                 {
        //                     val: 23,
        //                     highLevel: 20,
        //                     lowLevel: 10,
        //                     cssClass: '',
        //                     comp: ComponentType.STOCK_LEVEL
        //                 }
        //             ]
        //         },
        //         {
        //             id: '2',
        //             cells: [
        //                 {
        //                     val: '2A',
        //                     cssClass: '',
        //                     comp: ComponentType.DISPLAY_TEXT
        //                 },
        //                 {
        //                     val: '2022-2023',
        //                     cssClass: '',
        //                     comp: ComponentType.DISPLAY_TEXT
        //                 },
        //                 {
        //                     val: 'Brown, Eric',
        //                     cssClass: 'truncate',
        //                     comp: ComponentType.DISPLAY_TEXT
        //                 },
        //                 {
        //                     val: 25,
        //                     cssClass: '',
        //                     comp: ComponentType.DISPLAY_TEXT
        //                 },
        //                 {
        //                     val: 25,
        //                     highLevel: 20,
        //                     lowLevel: 10,
        //                     cssClass: '',
        //                     comp: ComponentType.STOCK_LEVEL
        //                 }
        //             ]
        //         }
        //     ],
        //     pagination: {
        //         length: 23,
        //         size: 5,
        //         page: 0,
        //         lastPage: 2,
        //         startIndex: 0,
        //         endIndex: 2
        //     }
        // }
        // return of(model);
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