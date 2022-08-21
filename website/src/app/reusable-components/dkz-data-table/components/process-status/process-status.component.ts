import { Component, Input, OnInit } from '@angular/core';
import { ProcessStatus } from '../../+state/models/dkz-data-table.models';

@Component({
  selector: 'app-process-status',
  template: `<span class="inline-flex items-center font-bold text-xs px-2.5 py-0.5 rounded-full tracking-wide uppercase"
  [ngClass]="{'bg-red-200 text-red-800 dark:bg-red-600 dark:text-red-50': val === 'pending',
              'bg-green-200 text-green-800 dark:bg-green-600 dark:text-green-50': val === 'completed'}">
  <span class="leading-relaxed whitespace-nowrap">{{ val }}</span>
</span>`
})
export class ProcessStatusComponent implements OnInit {
  @Input() val: ProcessStatus

  constructor() { }

  ngOnInit(): void {
  }

}
