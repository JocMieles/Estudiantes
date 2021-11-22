import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Course } from '../models/Course';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  
  API_URI = environment.API_URI;

  constructor(private http: HttpClient) { }

  getCourses(){
    return this.http.get(`${this.API_URI}/courses`);
  }

}
