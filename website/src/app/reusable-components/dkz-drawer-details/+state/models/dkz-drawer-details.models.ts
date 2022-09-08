import { DkzDataListViewModel } from "app/reusable-components/dkz-data-list/models/dkz-data-list.models";

export interface DkzDrawerDetails {
    id: string;
    icon: string;
    title: string;
    description: string;
}

export interface DkzDrawerDetailsViewModel{
    studentsModel: DkzDataListViewModel;
    coursesModel: DkzDataListViewModel;
}