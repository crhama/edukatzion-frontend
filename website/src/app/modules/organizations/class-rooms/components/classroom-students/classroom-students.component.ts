import { Component, OnInit } from '@angular/core';
import { DkzDataListViewModel } from 'app/reusable-components/dkz-data-list/models/dkz-data-list.models';

@Component({
  selector: 'classroom-students',
  templateUrl: './classroom-students.component.html',
  styleUrls: ['./classroom-students.component.scss']
})
export class ClassroomStudentsComponent implements OnInit {
  model: DkzDataListViewModel = {
    data: {
      members: [
        {
          avatar: 'assets/images/avatars/male-01.jpg',
          name: 'Dejesus Michael',
          email: 'dejesusmichael@mail.org',
          status: 'enrolled'
        },
        {
          avatar: 'assets/images/avatars/male-03.jpg',
          name: 'Mclaughlin Steele',
          email: 'mclaughlinsteele@mail.me',
          status: 'enrolled'
        },
        {
          avatar: 'assets/images/avatars/female-02.jpg',
          name: 'Laverne Dodson',
          email: 'lavernedodson@mail.ca',
          status: 'waitingList'
        },
        {
          avatar: 'assets/images/avatars/female-03.jpg',
          name: 'Trudy Berg',
          email: 'trudyberg@mail.us',
          status: 'enrolled'
        },
        {
          avatar: 'assets/images/avatars/male-07.jpg',
          name: 'Lamb Underwood',
          email: 'lambunderwood@mail.me',
          status: 'enrolled'
        },
        {
          avatar: 'assets/images/avatars/male-08.jpg',
          name: 'Mcleod Wagner',
          email: 'mcleodwagner@mail.biz',
          status: 'enrolled'
        },
        {
          avatar: 'assets/images/avatars/female-07.jpg',
          name: 'Shannon Kennedy',
          email: 'shannonkennedy@mail.ca',
          status: 'waitingList'
        }
      ],
      statuses: [
        {
          label: 'enrolled',
          value: 'enrolled',
          description: 'Student enrollement is confirmed.'
        },
        {
          label: 'Waiting List',
          value: 'waitingList',
          description: 'Waiting for the office decision.'
        }
      ]
    },
    pagination: {
      length: 0,
      size: 5,
      page: 0,
      lastPage: 0,
      startIndex: 0,
      endIndex: 0,
    }
  }
  

  constructor() { }


  /**
   * On init
   */
  ngOnInit(): void {}

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
