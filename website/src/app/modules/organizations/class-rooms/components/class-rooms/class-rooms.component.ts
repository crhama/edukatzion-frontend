import { Component, OnInit } from '@angular/core';
import { DkzDataTableViewModel } from 'app/reusable-components/dkz-data-table/+state/models/dkz-data-table.models';
import { ClassRoomsFacade } from '../../+state/services/class-rooms-facade.service';
import { ActivatedRoute } from '@angular/router';
import { convertStudentVmToDkzDtViewModel } from '../../+state/helpers/convert-classroom-vm-to-dkz-dt-vm.helper';

@Component({
  selector: 'app-class-rooms',
  template: `
  <dkz-data-table [model]="model">    
  </dkz-data-table>
  `
})
export class ClassRoomsComponent implements OnInit {
  model: DkzDataTableViewModel;

  constructor(private _facade: ClassRoomsFacade,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    let list = this._route.snapshot
      .data['classRoomsResolvedData'];
    this.model = convertStudentVmToDkzDtViewModel(list);
  }
}
