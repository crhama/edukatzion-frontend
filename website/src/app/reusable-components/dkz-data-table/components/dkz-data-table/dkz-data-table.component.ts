import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Subject, takeUntil, tap } from 'rxjs';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { DkzDataTableViewModel, PageChangeViewModel } from '../../+state/models/dkz-data-table.models';

@Component({
    selector: 'dkz-data-table',
    templateUrl: './dkz-data-table.component.html',
    styleUrls: ['./dkz-data-table.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: fuseAnimations
})
export class DkzDataTableComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild(MatPaginator) private _paginator: MatPaginator;
    @ViewChild(MatSort) private _sort: MatSort;
    _model: DkzDataTableViewModel;

    @Input() model: DkzDataTableViewModel;
    @Output() pageChange = new EventEmitter<PageChangeViewModel>();

    flashMessage: 'success' | 'error' | null = null;
    isLoading: boolean = false;
    searchInputControl: UntypedFormControl = new UntypedFormControl();

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseConfirmationService: FuseConfirmationService
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void { }

    /**
     * After view init
     */
    ngAfterViewInit(): void {
        if (this._paginator) {
            this._paginator.page
                .pipe(
                    takeUntil(this._unsubscribeAll),
                    tap((p) => {
                        const pChange: PageChangeViewModel = {
                            pageIndex: p.pageIndex,
                            pageSize: p.pageSize,
                            previousPageIndex: p.previousPageIndex
                        }
                        this.pageChange.emit(pChange);
                    })
                )
                .subscribe()
        }
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------



    /**
     * Create New Item
     */
    createNewItem(): void {
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }

}
