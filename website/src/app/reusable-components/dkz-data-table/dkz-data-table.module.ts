import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from 'app/shared/shared.module';
import { DkzDataTableComponent } from './components/dkz-data-table/dkz-data-table.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { DisplayTextComponent } from './components/display-text/display-text.component';
import { DisplayMoneyComponent } from './components/display-money/display-money.component';
import { StockLevelComponent } from './components/stock-level/stock-level.component';
import { ActiveStatusComponent } from './components/active-status/active-status.component';
import { ProcessStatusComponent } from './components/process-status/process-status.component';
import { DisplayDateTimeComponent } from './components/display-date-time/display-date-time.component';
import { DisplayLinkComponent } from './components/display-link/display-link.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DkzDataTableComponent,
    ThumbnailComponent,
    DisplayTextComponent,
    DisplayMoneyComponent,
    StockLevelComponent,
    ActiveStatusComponent,
    ProcessStatusComponent,
    DisplayDateTimeComponent,
    DisplayLinkComponent
  ],
  imports: [    
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatRippleModule,
    MatSortModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTooltipModule,
    SharedModule,

    RouterModule
  ],
  exports: [
    DkzDataTableComponent
  ]
})
export class DkzDataTableModule { }