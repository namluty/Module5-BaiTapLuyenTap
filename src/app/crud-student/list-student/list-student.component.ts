import {Component, OnInit, ViewChild} from '@angular/core';
import {Student} from '../../model/Student';
import {StudentService} from '../../service/student.service';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {DialogComponent} from '../../dialog/dialog/dialog.component';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'avatar', 'description', 'edit', 'delete', 'detail'];
  dataSource: any;
  students: Student[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private studentService: StudentService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getListStudent();
  }

  getListStudent() {
    this.studentService.getListStudent().subscribe(listStd => {
      this.students = listStd;
      this.dataSource = new MatTableDataSource<Student>(this.students);
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.getListStudent();
    });
  }

  openDialog(id: number) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteStudent(id);
      }
      console.log(`Dialog result: ${result}`);
    });
  }

}
