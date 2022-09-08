import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PageChangeViewModel } from "app/reusable-components/dkz-data-table/+state/models/dkz-data-table.models";
import { environment } from "environments/environment";
import { Observable, tap, map } from "rxjs";
import { ClassroomResultViewModel } from "../models/class-rooms.models";

@Injectable({
    providedIn: 'root'
})
export class ClassRoomsService{
    apiUrl = environment.apiUrl;

    constructor(private _http: HttpClient){}

    requestClassRoomList(
        pChange: PageChangeViewModel
        ): Observable<ClassroomResultViewModel> {
            const url = `${this.apiUrl}/Classrooms?pageIndex=${pChange.pageIndex}&pageSize=${pChange.pageSize}`;
            return this._http.get<ClassroomResultViewModel>(url)
                .pipe(                    
                    tap(x => console.log('response: ', x))
                );
    }

}