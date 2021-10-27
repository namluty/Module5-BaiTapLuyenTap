import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../service/student.service';
import {Student} from '../../model/Student';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.scss']
})
export class DetailStudentComponent implements OnInit {
  form: any = {};
  student: Student;

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

}
