export interface DkzDataTableViewModel {
    tableTitle: string;
    headerColumns: DkzHeaderViewModel[];
    rows: DkzRowViewModel[];
}

export interface DkzHeaderViewModel {
    name: string; 
    text: string; 
    cssClass: string; 
}

export interface DkzRowViewModel{
    id: string;
    cells: DkzCellViewModel[];
}

export interface DkzCellViewModel {
    val: string | number | boolean;
    comp: ComponentType;
    cssClass?: string; 
    highLevel?: number; 
    lowLevel?: number; 
}

export enum ComponentType {
    ACTIVE_STATUS = 0,
    DISPLAY_MONEY = 1,
    DISPLAY_TEXT = 2,
    STOCK_LEVEL = 3,
    THUMBNAIL = 4
}