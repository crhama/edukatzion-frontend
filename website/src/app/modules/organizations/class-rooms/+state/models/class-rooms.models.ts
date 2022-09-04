import { PaginationViewModel } from "app/shared/+state/models/pagination.model";

export interface ClassroomResultViewModel {
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



export interface xViewModel {
    classrooms: yClassroomViewModel[];
    pagination: PaginationViewModel;
}

export interface yClassroomViewModel {
    description: ClassroomDescriptionViewModel;
    students: ClassroomStudentsViewModel;
    courses: ClassroomCoursesViewModel;
}

//DESCRIPTION
export interface ClassroomDescriptionViewModel {
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

//STUDENTS
export interface ClassroomStudentsViewModel {
    students: ClassroomStudentMemberViewModel[];
    statuses: ClassroomStudentStatusViewModel[];
    pagination: PaginationViewModel;
}

export interface ClassroomStudentMemberViewModel {
    avatar: string;
    name: string;
    email: string;
    status: string;
}

export interface ClassroomStudentStatusViewModel {
    label: string;
    value: StudentStatusType;
    description: string;
}

export enum StudentStatusType {
    ENROLLED = 'enrolled',
    WATING_LIST = 'waitingList'
}

//COURSES
export interface ClassroomCoursesViewModel {
    courses: ClassroomCourseItemViewModel[];
    types: ClassroomCourseTypeViewModel[];
    pagination: PaginationViewModel;
}

export interface ClassroomCourseItemViewModel {
    title: string;
    instructorName: string;
    InstructorEmail: string;
    courseType: CourseType;
}

export interface ClassroomCourseTypeViewModel {
    label: string;
    value: CourseType;
    description: string;
}

export enum CourseType {
    REQUIRED = 'Required',
    ELECTIVE = 'Elective',
    OPTIONAL = 'Optional'
}

