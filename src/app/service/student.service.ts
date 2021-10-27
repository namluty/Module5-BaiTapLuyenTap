import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Student} from '../model/Student';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
//API LOCAL
  private API_STUDENT = environment.API_LOCAL + 'student';

  constructor(private http: HttpClient) {
  }

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.API_STUDENT, student);
  }

  pageStudent(nextPage) {
    const params = nextPage;
    return this.http.get(this.API_STUDENT, {params}); // {params} thuoc ve ham get cua angular
  }

  detailStudent(id: number): Observable<Student> {
    return this.http.get<Student>(this.API_STUDENT + '/' + id);
  }

  updateStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(this.API_STUDENT + '/' + id, student);
  }

  deleteStudent(id: number): Observable<Student> {
    return this.http.delete<Student>(this.API_STUDENT + '/' + id);
  }

  getListStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(this.API_STUDENT + '/list');
  }
}
