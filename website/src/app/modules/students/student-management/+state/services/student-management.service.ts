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
    constructor()
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
        const data: StudentViewModel[] = [
            {
                studentId: '001',
                firstName: 'Charlie Jr.',
                lastName: 'Rhamazany',
                status: 'completed',
                lastUpdated: new Date()
            },
            {
                studentId: '002',
                firstName: 'Malaika',
                lastName: 'Rhamazany',
                status: 'completed',
                lastUpdated: new Date()
            }
        ];
        return of(data);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

}
