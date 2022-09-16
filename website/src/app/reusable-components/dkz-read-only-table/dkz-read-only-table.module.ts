import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DkzReadOnlyTableComponent } from './components/dkz-read-only-table/dkz-read-only-table.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TranslocoModule } from '@ngneat/transloco';
import { SharedModule } from 'app/shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    DkzReadOnlyTableComponent
  ],
  imports: [
    CommonModule,

    // MatButtonModule,
    MatButtonToggleModule,
    MatDividerModule,
    // MatIconModule,
    MatMenuModule,
    MatProgressBarModule,
    MatRippleModule,
    // MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    NgApexchartsModule,
    TranslocoModule,

    MatPaginatorModule,

    SharedModule,
  ],
  exports: [
    DkzReadOnlyTableComponent
  ]
})
export class DkzReadOnlyTableModule { }
