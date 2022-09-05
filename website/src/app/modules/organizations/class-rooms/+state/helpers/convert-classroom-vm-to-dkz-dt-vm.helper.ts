import { ComponentType, DkzDataTableViewModel, ProcessStatus } from "app/reusable-components/dkz-data-table/+state/models/dkz-data-table.models";
import { ClassroomDescriptionViewModel } from "../models/class-rooms.models";

export function convertStudentVmToDkzDtViewModel(
    students: ClassroomDescriptionViewModel[]
): DkzDataTableViewModel {
    const rows = [];
    for (let i = 0; i < students.length; i++) {
        const elt = students[i];

        rows.push({
            id: elt.id,
            cells: [
                {
                    val: elt.name,
                    cssClass: '',
                    comp: ComponentType.DISPLAY_TEXT
                },
                {
                    val: elt.year,
                    cssClass: '',
                    comp: ComponentType.DISPLAY_TEXT
                },
                {
                    val: elt.headOfClass,
                    cssClass: '',
                    comp: ComponentType.DISPLAY_TEXT
                },
                {
                    val: elt.maxCapacity,
                    cssClass: '',
                    comp: ComponentType.DISPLAY_TEXT
                },
                {
                    val: elt.currCapacity,
                    highLevel: elt.highLevel,
                    lowLevel: elt.lowLevel,
                    cssClass: '',
                    comp: ComponentType.STOCK_LEVEL
                },
                {
                    val: elt.waitingList,
                    cssClass: '',
                    comp: ComponentType.DISPLAY_TEXT
                }
            ]
        });
    }

    const obj: DkzDataTableViewModel = {
        tableTitle: '',
        headerColumns: [
            { name: 'name', text: 'Name', cssClass: 'hidden md:block' },
            { name: 'year', text: 'Year', cssClass: 'hidden md:block' },
            { name: 'head', text: 'Head', cssClass: 'hidden md:block' },
            { name: 'maxCapacity', text: 'Capacity', cssClass: 'hidden md:block' },
            { name: 'currCapacity', text: 'Enrolled', cssClass: 'hidden md:block' },
            { name: 'waitingList', text: 'Waiting List', cssClass: 'hidden md:block' }
        ],
        rows,
        pagination: {
            length: 0,
            size: 5,
            page: 0,
            lastPage: 0,
            startIndex: 0,
            endIndex: 0
        }
    };

    return obj;
}