import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, takeUntil } from 'rxjs';
import { StudentViewModel } from '../../+state/models/student-management.models';
import { StudentManagementService } from '../../+state/services/student-management.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('recentTransactionsTable', {read: MatSort}) recentTransactionsTableMatSort: MatSort;

  data: any;
  studentListDataSource: MatTableDataSource<StudentViewModel> 
    = new MatTableDataSource();
  studentListTableColumns: string[] = ['studentId', 'firstName', 'lastName', 'status', 'lastUpdated'];
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _mgtService: StudentManagementService) { }

  /**
     * On init
     */
   ngOnInit(): void
   {
       // Get the data
       this._mgtService.getStudentList$
           .pipe(takeUntil(this._unsubscribeAll))
           .subscribe((data) => {

               // Store the data
               this.data = data;

               // Store the table data
               this.studentListDataSource.data = data;

               // Prepare the chart data
               //this._prepareChartData();
           });
   }

   /**
     * After view init
     */
    ngAfterViewInit(): void
    {
        // Make the data source sortable
        this.studentListDataSource.sort = this.recentTransactionsTableMatSort;
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
