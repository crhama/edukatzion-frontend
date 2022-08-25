import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { DkzDataListViewModel } from '../../models/dkz-data-list.models';

@Component({
  selector: 'dkz-data-list',
  templateUrl: './dkz-data-list.component.html',
  styleUrls: ['./dkz-data-list.component.scss']
})
export class DkzDataListComponent implements OnInit {
  @ContentChild('childcomp') childcomp!: TemplateRef<any>;
  @Input() model: DkzDataListViewModel;
  
  
  isLoading = false;

  constructor() { }


  /**
   * On init
   */
  ngOnInit(): void {}

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

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
