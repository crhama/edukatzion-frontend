import { DkzDataListViewModel } from "app/reusable-components/dkz-data-list/models/dkz-data-list.models";
import { DkzDrawerDetailsViewModel } from "app/reusable-components/dkz-drawer-details/+state/models/dkz-drawer-details.models";
import { ClassroomViewModel } from "../models/class-rooms.models";

export function convertClassroomVmToDkzDtVmHelper(
    crm: ClassroomViewModel
): DkzDrawerDetailsViewModel {
    const studentsModel: DkzDataListViewModel = {
        data: {
        members: crm.studentVm.students,
        statuses: crm.studentVm.statuses
        },
        pagination: {
            length: crm.studentVm.pagination.length,
            size: crm.studentVm.pagination.pageSize,
            page: crm.studentVm.pagination.pageIndex,
            lastPage: 0,
            startIndex: 0,
            endIndex: 0
        }
    };

    const coursesModel: DkzDataListViewModel = {
        data: {
            courses: crm.courseVm.courses,
            types: crm.courseVm.types
        },
        pagination: {
            length: crm.courseVm.pagination.length,
            size: crm.courseVm.pagination.pageSize,
            page: crm.courseVm.pagination.pageIndex,
            lastPage: 0,
            startIndex: 0,
            endIndex: 0
        }
    }
    return {
        studentsModel,
        coursesModel
    }
}