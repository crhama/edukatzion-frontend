import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { StudentViewModel } from '../models/student-management.models';

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

    /**
     * Getter for data
     */
    get getStudentList$(): Observable<StudentViewModel[]>
    {
        const url = 'https://localhost:7177/api/ManageStudents';
        return this._http.get<StudentViewModel[]>(url);

        // const data: StudentViewModel[] = [
        //     {
        //         studentId: '001',
        //         firstName: 'Charlie Sr.',
        //         lastName: 'Rhamazany',
        //         registrationStatus: 'completed',
        //         lastUpdated: new Date()
        //     },
        //     {
        //         studentId: '002',
        //         firstName: 'Monia',
        //         lastName: 'Akele-Sita',
        //         registrationStatus: 'completed',
        //         lastUpdated: new Date()
        //     },
        //     {
        //         studentId: '003',
        //         firstName: 'Charlie Jr.',
        //         lastName: 'Rhamazany',
        //         registrationStatus: 'completed',
        //         lastUpdated: new Date()
        //     },
        //     {
        //         studentId: '004',
        //         firstName: 'Malaika',
        //         lastName: 'Rhamazany',
        //         registrationStatus: 'completed',
        //         lastUpdated: new Date()
        //     },
        //     {
        //         studentId: '005',
        //         firstName: 'Charlie Sr.',
        //         lastName: 'Rhamazany',
        //         registrationStatus: 'completed',
        //         lastUpdated: new Date()
        //     },
        //     // {
        //     //     studentId: '006',
        //     //     firstName: 'Monia',
        //     //     lastName: 'Akele-Sita',
        //     //     status: 'completed',
        //     //     lastUpdated: new Date()
        //     // },
        //     // {
        //     //     studentId: '007',
        //     //     firstName: 'Charlie Jr.',
        //     //     lastName: 'Rhamazany',
        //     //     status: 'completed',
        //     //     lastUpdated: new Date()
        //     // },
        //     // {
        //     //     studentId: '008',
        //     //     firstName: 'Malaika',
        //     //     lastName: 'Rhamazany',
        //     //     status: 'completed',
        //     //     lastUpdated: new Date()
        //     // }
        // ];
        // return of(data);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

}
