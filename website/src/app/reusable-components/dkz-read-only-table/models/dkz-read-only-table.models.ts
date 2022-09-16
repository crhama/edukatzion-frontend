export enum DisplayType {
    DKZ_TEXT = 1,
    DKZ_PCT,
    DKZ_CURR_US,
    DKZ_DATE    
  }

export interface DkzReadOnlyTableViewModel{
  title: string;
  columnData: DkzReadOnlyColumnViewModel[];
  rows: any[]
}

export interface DkzReadOnlyColumnViewModel{
  column: string;
  label: string;
  type: DisplayType;
  url?: string;
}