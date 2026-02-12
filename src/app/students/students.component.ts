import { CommonModule } from "@angular/common";
import { Component, inject, OnInit, signal } from "@angular/core";
import { GetStudent } from "../../models/student.model";
import { StudentsService } from "../../services/students/students.service";

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  private readonly studentsService = inject(StudentsService);
  public students = signal<GetStudent[]>([]);

  public async ngOnInit(): Promise<void> {
    const students = await this.studentsService.getStudents();
    this.students.set(students);
  }

  public async deleteStudent(studentId: string): Promise<void> {
    try {
      await this.studentsService.deleteStudent(studentId);

      // After successful deletion, remove the student from the list
      this.students.set(this.students().filter(student => student.id !== studentId));
    } catch (error) {
      console.error(error);
    }
  }
}