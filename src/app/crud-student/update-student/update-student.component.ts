import {Component, OnInit} from '@angular/core';
import {Student} from '../../model/Student';
import {ActivatedRoute} from '@angular/router';
import {StudentService} from '../../service/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {
  student: Student;
  status = 'Form Edit Student!!!';
  success: any = {
    message: 'update_success'
  };

  constructor(private atRouter: ActivatedRoute,
              private studentService: StudentService,
  ) {
  }

  ngOnInit(): void {
    this.atRouter.paramMap.subscribe(ctgId => {
      const id = +ctgId.get('id');
      this.studentService.detailStudent(id).subscribe(std => {
        this.student = std;
      });
    });
  }

  ngUpdate() {
    this.studentService.updateStudent(this.student.id, this.student).subscribe(data => {
      if (JSON.stringify(data) == JSON.stringify(this.success)) {
        this.status = 'Update Success!';
      }
    });
  }
}
