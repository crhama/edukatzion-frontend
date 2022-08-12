import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApexOptions } from 'apexcharts';
import { Subject, takeUntil } from 'rxjs';
import { FinanceService } from '../../+state/services/finance.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('recentTransactionsTable', {read: MatSort}) recentTransactionsTableMatSort: MatSort;

  data: any;
  accountBalanceOptions: ApexOptions;
  recentTransactionsDataSource: MatTableDataSource<any> = new MatTableDataSource();
  recentTransactionsTableColumns: string[] = ['transactionId', 'date', 'name', 'amount', 'status'];
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private _financeService: FinanceService) { }

  /**
     * On init
     */
   ngOnInit(): void
   {
       // Get the data
       this._financeService.data$
           .pipe(takeUntil(this._unsubscribeAll))
           .subscribe((data) => {

               // Store the data
               this.data = data;

               // Store the table data
               this.recentTransactionsDataSource.data = data.recentTransactions;

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
        this.recentTransactionsDataSource.sort = this.recentTransactionsTableMatSort;
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
