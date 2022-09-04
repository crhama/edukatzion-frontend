import { Component, OnInit } from '@angular/core';
import { DkzDataListViewModel } from 'app/reusable-components/dkz-data-list/models/dkz-data-list.models';


@Component({
  selector: 'classroom-courses',
  templateUrl: './classroom-courses.component.html',
  styleUrls: ['./classroom-courses.component.scss']
})
export class ClassroomCoursesComponent implements OnInit {

  model: DkzDataListViewModel = {
    data: {
      courses: [
        {
          title: 'Data Communications and Networks',
          name: 'Dejesus Michael',
          email: 'dejesusmichael@mail.org',
          type: 'required'
        },
        {
          title: 'Management Information Systems',
          avatar: 'assets/images/avatars/male-03.jpg',
          name: 'Mclaughlin Steele',
          email: 'mclaughlinsteele@mail.me',
          type: 'required'
        },
        {
          title: 'Introduction to Database Design',
          avatar: 'assets/images/avatars/female-02.jpg',
          name: 'Laverne Dodson',
          email: 'lavernedodson@mail.ca',
          type: 'elective'
        },
        {
          title: 'Software and Hardware Concepts',
          avatar: 'assets/images/avatars/female-03.jpg',
          name: 'Trudy Berg',
          email: 'trudyberg@mail.us',
          type: 'required'
        },
        {
          title: 'Structured Systems Analysis & Design',
          avatar: 'assets/images/avatars/male-07.jpg',
          name: 'Lamb Underwood',
          email: 'lambunderwood@mail.me',
          type: 'required'
        },
        {
          title: 'Database Program Development',
          avatar: 'assets/images/avatars/male-08.jpg',
          name: 'Mcleod Wagner',
          email: 'mcleodwagner@mail.biz',
          type: 'elective'
        },
        {
          title: 'Network Design and Management',
          avatar: 'assets/images/avatars/female-07.jpg',
          name: 'Shannon Kennedy',
          email: 'shannonkennedy@mail.ca',
          type: 'optional'
        }
      ],
      types: [
        {
          label: 'Required',
          value: 'required',
          description: 'This course will is part of the student curriculum.'
        },
        {
          label: 'Elective',
          value: 'elective',
          description: 'If choosen by the student, Result of this course will be added to the final grade.'
        },
        {
          label: 'Optional',
          value: 'optional',
          description: 'Result of this course will not be added to student final grade.'
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
