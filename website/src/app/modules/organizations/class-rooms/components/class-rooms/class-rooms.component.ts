import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ComponentType, DkzDataTableViewModel } from 'app/reusable-components/dkz-data-table/+state/models/dkz-data-table.models';
import { ClassRoomsFacade } from '../../+state/services/class-rooms-facade.service';

@Component({
  selector: 'app-class-rooms',
  template: `
  <dkz-data-table [model]="model">    
  </dkz-data-table>
  `
})
export class ClassRoomsComponent implements OnInit {
  model: DkzDataTableViewModel;

  constructor(private _facade: ClassRoomsFacade) { }

  ngOnInit(): void {
    this._facade.classRoomList$
      .pipe(
        tap((m) => this.model = m)
      )
      .subscribe();

      this._facade.requestClassRoomList();
  }

}
