import { Component, OnInit } from '@angular/core';
import { DkzDrawerDetails } from 'app/reusable-components/dkz-drawer-details/+state/models/dkz-drawer-details.models';

@Component({
  selector: 'app-classroom-details',
  template: `
    <dkz-drawer-details [panels]="panels" 
      [title]="title" [selectedPanel]="selectedPanel">
      <ng-template #childcomp let-selectedPanel>
      <ng-container [ngSwitch]="selectedPanel">
        <!-- description -->
        <ng-container *ngSwitchCase="'description'">
            <classroom-description></classroom-description>
        </ng-container>
        <!-- students -->
        <ng-container *ngSwitchCase="'students'">
            <classroom-students></classroom-students>
        </ng-container>
        <!-- courses -->
        <ng-container *ngSwitchCase="'courses'">
            <classroom-courses></classroom-courses>
        </ng-container>
        </ng-container>
      </ng-template>      
    </dkz-drawer-details>
    `
})
export class ClassroomDetailsComponent implements OnInit {
  panels: DkzDrawerDetails[] = [];
  title = 'Classroom: 1A';
  selectedPanel: string = 'students';

  /**
     * Constructor
     */
  constructor() {
  }


  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   
    /**
     * On init
     */
  ngOnInit(): void {
    // Setup available panels
    this.panels = [
      {
        id: 'description',
        icon: 'heroicons_outline:user-circle',
        title: 'Description',
        description: 'Manage basic information'
      },
      {
        id: 'students',
        icon: 'heroicons_outline:user-circle',
        title: 'Students',
        description: 'Manage students in this class'
      },
      {
        id: 'courses',
        icon: 'heroicons_outline:user-circle',
        title: 'Courses',
        description: 'Manage courses'
      }
    ];
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

}
