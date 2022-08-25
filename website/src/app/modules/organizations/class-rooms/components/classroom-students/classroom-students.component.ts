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
          role: 'admin'
        },
        {
          avatar: 'assets/images/avatars/male-03.jpg',
          name: 'Mclaughlin Steele',
          email: 'mclaughlinsteele@mail.me',
          role: 'admin'
        },
        {
          avatar: 'assets/images/avatars/female-02.jpg',
          name: 'Laverne Dodson',
          email: 'lavernedodson@mail.ca',
          role: 'write'
        },
        {
          avatar: 'assets/images/avatars/female-03.jpg',
          name: 'Trudy Berg',
          email: 'trudyberg@mail.us',
          role: 'read'
        },
        {
          avatar: 'assets/images/avatars/male-07.jpg',
          name: 'Lamb Underwood',
          email: 'lambunderwood@mail.me',
          role: 'read'
        },
        {
          avatar: 'assets/images/avatars/male-08.jpg',
          name: 'Mcleod Wagner',
          email: 'mcleodwagner@mail.biz',
          role: 'read'
        },
        {
          avatar: 'assets/images/avatars/female-07.jpg',
          name: 'Shannon Kennedy',
          email: 'shannonkennedy@mail.ca',
          role: 'read'
        }
      ],
      roles: [
        {
          label: 'Read',
          value: 'read',
          description: 'Can read and clone this repository. Can also open and comment on issues and pull requests.'
        },
        {
          label: 'Write',
          value: 'write',
          description: 'Can read, clone, and push to this repository. Can also manage issues and pull requests.'
        },
        {
          label: 'Admin',
          value: 'admin',
          description: 'Can read, clone, and push to this repository. Can also manage issues, pull requests, and repository settings, including adding collaborators.'
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
