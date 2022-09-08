import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DkzDataListViewModel } from 'app/reusable-components/dkz-data-list/models/dkz-data-list.models';
import { DkzDrawerDetails } from 'app/reusable-components/dkz-drawer-details/+state/models/dkz-drawer-details.models';
import { tap } from 'rxjs';
import { ClassRoomsFacade } from '../../+state/services/class-rooms-facade.service';

@Component({
  selector: 'app-classroom-details',
  template: `
    <dkz-drawer-details [panels]="panels" 
      [title]="title" [selectedPanel]="selectedPanel">
      <ng-template #childcomp let-selectedPanel>
      <ng-container [ngSwitch]="selectedPanel">
        <!-- description -->
        <ng-container *ngSwitchCase="'description'">
            <classroom-description>              
            </classroom-description>
        </ng-container>
        <!-- students -->
        <ng-container *ngSwitchCase="'students'">
            <classroom-students [studentsModel]="studentsModel">              
            </classroom-students>
        </ng-container>
        <!-- courses -->
        <ng-container *ngSwitchCase="'courses'">
            <classroom-courses  [coursesModel]="coursesModel">              
            </classroom-courses>
        </ng-container>
        </ng-container>
      </ng-template>      
    </dkz-drawer-details>
    `
})
export class ClassroomDetailsComponent implements OnInit {
  panels: DkzDrawerDetails[] = [];
  title = 'Classroom: 1A';
  selectedPanel: string = 'description';
  studentsModel: DkzDataListViewModel;
  //  = {
  //   data: {
  //     members: [
  //       {
  //         avatar: 'assets/images/avatars/male-01.jpg',
  //         name: 'Dejesus Michael',
  //         email: 'dejesusmichael@mail.org',
  //         status: 'enrolled'
  //       },
  //       {
  //         avatar: 'assets/images/avatars/male-03.jpg',
  //         name: 'Mclaughlin Steele',
  //         email: 'mclaughlinsteele@mail.me',
  //         status: 'enrolled'
  //       },
  //       {
  //         avatar: 'assets/images/avatars/female-02.jpg',
  //         name: 'Laverne Dodson',
  //         email: 'lavernedodson@mail.ca',
  //         status: 'waitingList'
  //       },
  //       {
  //         avatar: 'assets/images/avatars/female-03.jpg',
  //         name: 'Trudy Berg',
  //         email: 'trudyberg@mail.us',
  //         status: 'enrolled'
  //       },
  //       {
  //         avatar: 'assets/images/avatars/male-07.jpg',
  //         name: 'Lamb Underwood',
  //         email: 'lambunderwood@mail.me',
  //         status: 'enrolled'
  //       },
  //       {
  //         avatar: 'assets/images/avatars/male-08.jpg',
  //         name: 'Mcleod Wagner',
  //         email: 'mcleodwagner@mail.biz',
  //         status: 'enrolled'
  //       },
  //       {
  //         avatar: 'assets/images/avatars/female-07.jpg',
  //         name: 'Shannon Kennedy',
  //         email: 'shannonkennedy@mail.ca',
  //         status: 'waitingList'
  //       }
  //     ],
  //     statuses: [
  //       {
  //         label: 'enrolled',
  //         value: 'enrolled',
  //         description: 'Student enrollement is confirmed.'
  //       },
  //       {
  //         label: 'Waiting List',
  //         value: 'waitingList',
  //         description: 'Waiting for the office decision.'
  //       }
  //     ]
  //   },
  //   pagination: {
  //     length: 0,
  //     size: 5,
  //     page: 0,
  //     lastPage: 0,
  //     startIndex: 0,
  //     endIndex: 0,
  //   }
  // }
  coursesModel: DkzDataListViewModel;
  //  = {
  //   data: {
  //     courses: [
  //       {
  //         title: 'Data Communications and Networks',
  //         name: 'Dejesus Michael',
  //         email: 'dejesusmichael@mail.org',
  //         type: 'required'
  //       },
  //       {
  //         title: 'Management Information Systems',
  //         avatar: 'assets/images/avatars/male-03.jpg',
  //         name: 'Mclaughlin Steele',
  //         email: 'mclaughlinsteele@mail.me',
  //         type: 'required'
  //       },
  //       {
  //         title: 'Introduction to Database Design',
  //         avatar: 'assets/images/avatars/female-02.jpg',
  //         name: 'Laverne Dodson',
  //         email: 'lavernedodson@mail.ca',
  //         type: 'elective'
  //       },
  //       {
  //         title: 'Software and Hardware Concepts',
  //         avatar: 'assets/images/avatars/female-03.jpg',
  //         name: 'Trudy Berg',
  //         email: 'trudyberg@mail.us',
  //         type: 'required'
  //       },
  //       {
  //         title: 'Structured Systems Analysis & Design',
  //         avatar: 'assets/images/avatars/male-07.jpg',
  //         name: 'Lamb Underwood',
  //         email: 'lambunderwood@mail.me',
  //         type: 'required'
  //       },
  //       {
  //         title: 'Database Program Development',
  //         avatar: 'assets/images/avatars/male-08.jpg',
  //         name: 'Mcleod Wagner',
  //         email: 'mcleodwagner@mail.biz',
  //         type: 'elective'
  //       },
  //       {
  //         title: 'Network Design and Management',
  //         avatar: 'assets/images/avatars/female-07.jpg',
  //         name: 'Shannon Kennedy',
  //         email: 'shannonkennedy@mail.ca',
  //         type: 'optional'
  //       }
  //     ],
  //     types: [
  //       {
  //         label: 'Required',
  //         value: 'required',
  //         description: 'This course will is part of the student curriculum.'
  //       },
  //       {
  //         label: 'Elective',
  //         value: 'elective',
  //         description: 'If choosen by the student, Result of this course will be added to the final grade.'
  //       },
  //       {
  //         label: 'Optional',
  //         value: 'optional',
  //         description: 'Result of this course will not be added to student final grade.'
  //       }
  //     ]
  //   },
  //   pagination: {
  //     length: 0,
  //     size: 5,
  //     page: 0,
  //     lastPage: 0,
  //     startIndex: 0,
  //     endIndex: 0,
  //   }
  // }

  /**
     * Constructor
     */
  constructor(private _facade: ClassRoomsFacade,
    private _route: ActivatedRoute) {
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
    this.setPanels();
    const id = this._route.snapshot.paramMap.get('id');

    this._facade
      .getClassRoomById(id)
      .pipe(
        tap((crm) => {
          this.studentsModel  = crm.studentsModel,
          this.coursesModel = crm.coursesModel
        })
      )
      .subscribe();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  setPanels(){
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
}
