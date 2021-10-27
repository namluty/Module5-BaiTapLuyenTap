import {Component, OnInit} from '@angular/core';
import {Student} from '../../model/Student';
import {StudentService} from '../../service/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {
  form: any = {};
  student: Student;
  status = 'Please fill in the form to create student';
  success: any = {
    message: 'create_student_success'
  };

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
  }

  ngCreate() {

    this.student = new Student(
      this.form.name,
      this.form.dateOfBirth
    );
    this.studentService.createStudent(this.student).subscribe(data => {
      if (JSON.stringify(data) == JSON.stringify(this.success)) {
        this.status = 'Create success!';
      }
    });
  }
}
