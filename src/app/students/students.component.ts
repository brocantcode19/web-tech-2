import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Student {
  id: number;
  name: string;
  course: string;
  yearLevel: string;
}

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  students: Student[] = [
    {
      id: 1,
      name: 'Sarah Martinez',
      course: 'Computer Science',
      yearLevel: '3rd Year'
    },
    {
      id: 2,
      name: 'James Chen',
      course: 'Information Technology',
      yearLevel: '2nd Year'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      course: 'Software Engineering',
      yearLevel: '4th Year'
    },
    {
      id: 4,
      name: 'Michael Thompson',
      course: 'Data Science',
      yearLevel: '1st Year'
    },
    {
      id: 5,
      name: 'Jessica Wang',
      course: 'Computer Science',
      yearLevel: '3rd Year'
    }
  ];

  constructor(private router: Router) {}

  navigateToAddStudent(): void {
    this.router.navigate(['/students/create']);
  }

  deleteStudent(id: number): void {
    this.students = this.students.filter(student => student.id !== id);
  }
}