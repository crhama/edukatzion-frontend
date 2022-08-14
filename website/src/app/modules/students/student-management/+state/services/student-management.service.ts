import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, tap } from 'rxjs';
import { StudentResultViewModel } from '../models/student-management.models';

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
        pageIndex = 0, 
        pageSize = 5
    ): Observable<StudentResultViewModel>{
        const url = `https://localhost:7177/api/ManageStudents?pageIndex=${pageIndex}&pageSize=${pageSize}`;
        return this._http.get<any>(url)
            .pipe(
                tap(x => console.log('response: ', x)),
                map((x) => x.studentListResult)
            );
    }
}
