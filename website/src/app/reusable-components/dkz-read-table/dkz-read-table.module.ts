import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DkzReadTableComponent } from './components/dkz-read-table/dkz-read-table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TranslocoModule } from '@ngneat/transloco';
import { SharedModule } from 'app/shared/shared.module';



@NgModule({
  declarations: [
    DkzReadTableComponent
  ],
  imports: [
    CommonModule,

    MatButtonModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatRippleModule,
        MatSidenavModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        NgApexchartsModule,
        TranslocoModule,
        SharedModule
  ],
  exports: [
    DkzReadTableComponent
  ]
})
export class DkzReadTableModule { }
