import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PageChangeViewModel } from "app/reusable-components/dkz-data-table/+state/models/dkz-data-table.models";
import { Observable, tap, map } from "rxjs";
import { ClassroomResultViewModel } from "../models/class-rooms.models";

@Injectable({
    providedIn: 'root'
})
export class ClassRoomsService{

    constructor(private _http: HttpClient){}

    requestClassRoomList(
        pChange: PageChangeViewModel
        ): Observable<ClassroomResultViewModel> {
            const url = `https://localhost:7177/api/organizations/classrooms?pageIndex=${pChange.pageIndex}&pageSize=${pChange.pageSize}`;
            return this._http.get<any>(url)
                .pipe(
                    tap(x => console.log('response: ', x)),
                    map((x) => x.classroomListResult)
                );
    }

}