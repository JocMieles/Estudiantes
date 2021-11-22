import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { StudentsCourses } from '../models/StudentsCourses';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class StudentsCoursesService {

  API_URI = environment.API_URI;

  constructor(private http: HttpClient) { }

  getStudentCourses(IdEstudiante: string){
    return this.http.get(`${this.API_URI}/studentCourses/${IdEstudiante}`);
  }

  deleteStudentCourses(Id: string){
    console.log('deleteStudentCourses:'+Id)
    return this.http.delete(`${this.API_URI}/studentCourses/${Id}`);
  }

  saveStudentCourses(studentCourses: StudentsCourses){
    console.log('saveStudentCourses:'+studentCourses)
    return this.http.post(`${this.API_URI}/studentCourses`,studentCourses);
  }

}
