import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, tap } from 'rxjs';
import { StudentResultViewModel } from '../models/student-management.models';
import { PageChangeViewModel } from 'app/reusable-components/dkz-data-table/+state/models/dkz-data-table.models';

@Injectable({
    providedIn: 'root'
})
export class StudentManagementService
{
    /**
     * Constructor
     */
    constructor(private _http: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    getStudentList(
        pChange: PageChangeViewModel
    ): Observable<StudentResultViewModel>{
        const url = `https://localhost:7177/api/ManageStudents?pageIndex=${pChange.pageIndex}&pageSize=${pChange.pageSize}`;
        return this._http.get<any>(url)
            .pipe(
                tap(x => console.log('response: ', x)),
                map((x) => x.studentListResult)
            );
    }
}
