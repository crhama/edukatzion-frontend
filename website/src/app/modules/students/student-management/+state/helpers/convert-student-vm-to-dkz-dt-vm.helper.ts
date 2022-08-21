import { ComponentType, DkzDataTableViewModel, ProcessStatus } from "app/reusable-components/dkz-data-table/+state/models/dkz-data-table.models";
import { StudentViewModel } from "../models/student-management.models";

export function convertStudentVmToDkzDtViewModel(
    students: StudentViewModel[]
): DkzDataTableViewModel {
    const rows = [];
    for (let i = 0; i < students.length; i++) {
        const elt = students[i];

        rows.push({
            id: elt.studentId,
            cells: [
                {
                    val: '',
                    cssClass: '',
                    comp: ComponentType.THUMBNAIL
                },
                {
                    val: elt.studentId,
                    cssClass: '',
                    comp: ComponentType.DISPLAY_TEXT
                },
                {
                    val: elt.firstName,
                    cssClass: '',
                    comp: ComponentType.DISPLAY_TEXT
                },
                {
                    val: elt.lastName,
                    cssClass: '',
                    comp: ComponentType.DISPLAY_TEXT
                },
                {
                    val: elt.registrationStatus,
                    cssClass: '',
                    comp: ComponentType.PROCESS_STATUS
                },
                {
                    val: elt.lastUpdated,
                    cssClass: '',
                    comp: ComponentType.DISPLAY_DATETIME
                }

            ]
        });
    }

    const obj: DkzDataTableViewModel = {
        tableTitle: '',
        headerColumns: [
            { name: 'thumbnail', text: '', cssClass: '' },
            { name: 'studentId', text: 'Student Id', cssClass: '' },
            { name: 'firstName', text: 'First Name', cssClass: '' },
            { name: 'lastName', text: 'Last Name', cssClass: '' },
            { name: 'status', text: 'Status', cssClass: '' },
            { name: 'lastUpdate', text: 'Last Update', cssClass: '' }
        ],
        rows,
        pagination: {
            length: 23,
            size: 5,
            page: 0,
            lastPage: 2,
            startIndex: 0,
            endIndex: 2
        }
    };

    return obj;
}