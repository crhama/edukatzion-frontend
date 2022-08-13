import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, takeUntil, tap } from 'rxjs';
import { PaginationViewModel } from '../../+state/models/shared.models';
import { StudentViewModel } from '../../+state/models/student-management.models';
import { StudentManagementFacade } from '../../+state/services/student-management-facade.service';
import { StudentManagementService } from '../../+state/services/student-management.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('recentTransactionsTable', {read: MatSort}) recentTransactionsTableMatSort: MatSort;
  @ViewChild(MatPaginator) private _paginator: MatPaginator;

  data: any;
  studentListDataSource: MatTableDataSource<StudentViewModel> 
    = new MatTableDataSource();
  studentListTableColumns: string[] = ['studentId', 'firstName', 'lastName', 'registrationStatus', 'lastUpdated'];
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  //TO BE MOVED
  pagination: PaginationViewModel = {
    length: 400,
    size: 10,
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
           .pipe(takeUntil(this._unsubscribeAll))
           .subscribe((data) => {

               // Store the data
               this.data = data;

               // Store the table data
               this.studentListDataSource.data = data;

               // Prepare the chart data
               //this._prepareChartData();
           });

      this._mgtFacade.requesStudentList();
   }

   /**
     * After view init
     */
    ngAfterViewInit(): void
    {
        // Make the data source sortable
        this.studentListDataSource.sort = this.recentTransactionsTableMatSort;
    
        this._paginator.page
        .pipe(
          takeUntil(this._unsubscribeAll),
          tap((p) => console.log(p))
        )
        .subscribe()
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
