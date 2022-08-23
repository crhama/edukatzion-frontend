import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { DkzDataTableViewModel, PageChangeViewModel } from 'app/reusable-components/dkz-data-table/+state/models/dkz-data-table.models';
import { mergeMap, Subject, takeUntil, tap } from 'rxjs';
import { StudentManagementFacade } from '../../+state/services/student-management-facade.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit, OnDestroy {
  @ViewChild('recentTransactionsTable', { read: MatSort }) recentTransactionsTableMatSort: MatSort;
  
  model: DkzDataTableViewModel;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  

  constructor(
    private _mgtFacade: StudentManagementFacade) { }

  /**
     * On init
     */
  ngOnInit(): void {
    // Get the data
    this._mgtFacade.studentList$
      .pipe(
        takeUntil(this._unsubscribeAll),
        tap((data) => {
          this.model = data;
          this.model.tableTitle = 'Student List'
        }),
        mergeMap(() => this._mgtFacade.pagination$
          .pipe(
            tap((pg) => {
              this.model.pagination.length = pg.length;
              this.model.pagination.size = pg.pageSize;
              this.model.pagination.page = pg.pageIndex;
            })
          )
        )
      )
      .subscribe();

    this._mgtFacade.requesStudentList();
  }

  /**
     * On destroy
     */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  onPageChange(pChange: PageChangeViewModel){
    console.log("pChange: ", pChange);
    this._mgtFacade.requesStudentList(pChange);
  }

}
