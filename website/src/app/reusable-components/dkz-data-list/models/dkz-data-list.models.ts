import { PaginationViewModel } from "app/reusable-components/dkz-data-table/+state/models/dkz-data-table.models";

export interface DkzDataListViewModel {
    data: any;
    pagination: PaginationViewModel;
}

export interface StudentDataListViewModel {
    members: any[];
    roles: any[];
}