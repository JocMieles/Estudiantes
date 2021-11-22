import { Component,  OnInit } from '@angular/core';

import { ModalService } from '../../services/modal.service';

import { StudentsService } from '../../services/students.service'
import { CoursesService } from '../../services/courses.service'
import { StudentsCoursesService } from '../../services/students-courses.service'
import { StudentsCourses } from '../../models/StudentsCourses';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog'
import { StudentListComponent } from '../student-list/student-list.component'
import { StudentsCoursesListComponent } from '../students-courses-list/students-courses-list.component';

@Component({
  selector: 'jw-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.css']
})
export class ModalComponent implements OnInit {
  courses: any = [];
  selectedValue: string | any;
  IdEstudiante: any;
  studentsCourse: StudentsCourses = {

    Id: 0,
    IdEstudiante: '',
    IdCurso: 0,
    NotaFinal: 0
  };
  constructor(public modalService: ModalService, private studentsService: StudentsService,
    public dialogRef: MatDialogRef<ModalComponent>, private coursesService: CoursesService,
    private studentsCoursesService: StudentsCoursesService, private router: Router) {

  }

  ngOnInit() {
    this.getCourses();
    this.IdEstudiante = this.modalService.form.get('Id')?.value;
  }

  onClear() {
    this.modalService.form.reset();
    this.modalService.formCourse.reset();
    this.modalService.success('Limpiado Exitoso');
  }

  getCourses() {
    this.coursesService.getCourses().subscribe(
      res => {
        this.courses = res;
      },
      err => console.error(err)
    );
  }


  onSubmit() {
    if (this.modalService.form.valid) {
      if (this.modalService.form.get('Id')?.value == null)
        this.studentsService.saveStudent(this.modalService.form.value).subscribe(
          res => {
            this.modalService.success('Creación Exitosa');
            this.modalService.form.setValue(res);
            this.IdEstudiante = this.modalService.form.get('Id')?.value;
          },
          err => this.modalService.warn('Creación No Exitosa')
        );
      else
        this.studentsService.updateStudent(this.modalService.form.get('Id')?.value, this.modalService.form.value).subscribe(
          res => {
            this.modalService.success('Actualización Exitosa');
          },
          err => this.modalService.warn('Actualización No Exitosa')
        );
        this.router.navigateByUrl('students', { skipLocationChange: true }).then(() => {
          this.router.navigate(['students']);
      }); 
    }

  }

  onClose() {
    this.modalService.form.reset();
    this.modalService.initializeFormGroup();
    this.modalService.formCourse.reset();
    this.modalService.initializeFormGroupCourse();
    this.dialogRef.close();
  }

  matricular() {
    if (this.modalService.formCourse.valid) {
      if(this.modalService.form.get('Id')?.value != null){
        let curso: number = +this.modalService.formCourse.get('IdCurso')?.value;
        let nota: number = + this.modalService.formCourse.get('NotaFinal')?.value;
        let id = this.modalService.form.get('Id')?.value;
        this.modalService.formCourse.setValue({ Id: 0, IdEstudiante: this.IdEstudiante, IdCurso: curso, NotaFinal: nota });
        this.studentsCourse.Id = 0;
        this.studentsCourse.IdCurso = this.modalService.formCourse.get('IdCurso')?.value;
        this.studentsCourse.IdEstudiante = this.modalService.form.get('Id')?.value;
        this.studentsCourse.NotaFinal = this.modalService.formCourse.get('NotaFinal')?.value;
        this.studentsCoursesService.saveStudentCourses(this.modalService.formCourse.value).subscribe(
          res => {
            this.modalService.success('Matricula Exitosa');
          },
          err => this.modalService.warn('No se puede matricular dos veces el mismo curso')
        );
        this.modalService.formCourse.reset();
        this.getCourses();
      }
      else{
        this.modalService.warn('Primero debe crear el estudiante')
      }
   
  }
  }

}