import { PaginationViewModel } from "app/shared/+state/models/pagination.model";

export interface StudentResultViewModel{
    students: StudentViewModel[];
    pagination: PaginationViewModel;
}

export interface StudentViewModel {
    studentId: string; 
    firstName: string; 
    middleName: string;
    lastName: string; 
    registrationStatus: string; 
    lastUpdated: Date
}