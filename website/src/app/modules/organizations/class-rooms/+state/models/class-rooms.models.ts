import { PaginationViewModel } from "app/shared/+state/models/pagination.model";

export interface ClassroomResultViewModel{
    classrooms: ClassroomViewModel[];
    pagination: PaginationViewModel;
}

export interface ClassroomViewModel {
    id: string;
    name: string; 
    year: string; 
    headOfClass: string;
    maxCapacity: number; 
    currCapacity: number; 
    highLevel: number; 
    lowLevel: number; 
    waitingList: number;
}