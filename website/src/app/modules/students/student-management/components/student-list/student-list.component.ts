import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ComponentType, DkzDataTableViewModel, ProcessStatus } from 'app/reusable-components/dkz-data-table/+state/models/dkz-data-table.models';
import { Subject, takeUntil, tap } from 'rxjs';
import { StudentViewModel } from '../../+state/models/student-management.models';
import { StudentManagementFacade } from '../../+state/services/student-management-facade.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('recentTransactionsTable', {read: MatSort}) recentTransactionsTableMatSort: MatSort;
  @ViewChild(MatPaginator) private _paginator: MatPaginator;

  model: DkzDataTableViewModel; 
  // = {
  //   tableTitle: 'Inventory',
  //   headerColumns: [
  //     { name: 'thumbnail', text: '', cssClass: '' },
  //     { name: 'studentId', text: 'Student Id', cssClass: '' },
  //     { name: 'firstName', text: 'First Name', cssClass: '' },
  //     { name: 'lastName', text: 'Last Name', cssClass: '' },
  //     { name: 'status', text: 'Status', cssClass: '' },
  //     { name: 'lastUpdate', text: 'Last Update', cssClass: '' }
  //   ],
  //   rows: [
  //     {
  //       id: '1',
  //       cells: [
  //         {
  //           val: '',
  //           cssClass: '',
  //           comp: ComponentType.THUMBNAIL
  //         },
  //         {
  //           val: '17015',
  //           cssClass: '',
  //           comp: ComponentType.DISPLAY_TEXT
  //         },
  //         {
  //           val: 'Evan',
  //           cssClass: '',
  //           comp: ComponentType.DISPLAY_TEXT
  //         },
  //         {
  //           val: 'King',
  //           cssClass: '',
  //           comp: ComponentType.DISPLAY_TEXT
  //         },
  //         {
  //           val: ProcessStatus.COMPLETED,
  //           cssClass: '',
  //           comp: ComponentType.PROCESS_STATUS
  //         },
  //         {
  //           val: new Date().toDateString(),
  //           cssClass: '',
  //           comp: ComponentType.DISPLAY_DATETIME
  //         }
          
  //       ]
  //     }
  //   ],
  //   pagination: {
  //     length: 23,
  //     size: 5,
  //     page: 0,
  //     lastPage: 2,
  //     startIndex: 0,
  //     endIndex: 2
  //   }
  // }



  data: any;
  studentListDataSource: MatTableDataSource<StudentViewModel> 
    = new MatTableDataSource();
  studentListTableColumns: string[] = ['studentId', 'firstName', 'lastName', 'registrationStatus', 'lastUpdated'];
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  //TO BE MOVED
  pagination = {
    length: 0,
    size: 0,
    page: 0,
    lastPage: 0,
    startIndex: 0,
    endIndex: 0
}

  constructor(
    private _mgtFacade: StudentManagementFacade) { }

  /**
     * On init
     */
   ngOnInit(): void
   {
       // Get the data
       this._mgtFacade.studentList$
           .pipe(
            takeUntil(this._unsubscribeAll),
            tap((data) => {

              // Store the data
              //this.data = data;
              this.model = data;

              // Store the table data
              // this.studentListDataSource.data = data;

              // Prepare the chart data
              //this._prepareChartData();
          })
          )
           .subscribe();

        this._mgtFacade.pagination$
           .pipe(
            takeUntil(this._unsubscribeAll),
            tap((pg) => {
              this.pagination.length = pg.length;
              this.pagination.size = pg.pageSize;
              this.pagination.page = pg.pageIndex;
            })
           )
           .subscribe();

      this._mgtFacade.requesStudentList();
   }

   /**
     * After view init
     */
    ngAfterViewInit(): void
    {
        // Make the data source sortable
        this.studentListDataSource.sort = this.recentTransactionsTableMatSort;
    
        // this._paginator.page
        // .pipe(
        //   takeUntil(this._unsubscribeAll),
        //   tap((p) => {
        //     console.log(p);
        //     this._mgtFacade.requesStudentList(p.pageIndex, p.pageSize);
        //   })
        // )
        // .subscribe()
      }

  /**
     * On destroy
     */
   ngOnDestroy(): void
   {
       // Unsubscribe from all subscriptions
       this._unsubscribeAll.next(null);
       this._unsubscribeAll.complete();
   }

   // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
     trackByFn(index: number, item: any): any
     {
         return item.id || index;
     }

}
