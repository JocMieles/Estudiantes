import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Students } from '../models/Students';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  API_URI = environment.API_URI;

  constructor(private http: HttpClient) { }

  getStudents(){
    return this.http.get(`${this.API_URI}/students`);
  }

  getStudent(id: string){
    return this.http.get(`${this.API_URI}/students/${id}`);
  }

  deleteStudent(id: string){
    return this.http.delete(`${this.API_URI}/students/${id}`);
  }

  saveStudent(student: Students){
    console.log(student)
    return this.http.post(`${this.API_URI}/students/spCreate/`,student);
  }

  updateStudent(id: string, student: Students): Observable<Students>{
    console.log(student)
    return this.http.put(`${this.API_URI}/students/${id}`,student);
  }

}
