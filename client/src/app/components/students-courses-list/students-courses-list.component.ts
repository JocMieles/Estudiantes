import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ModalComponent } from './../modal/modal.component';

import { StudentsCourses } from 'src/app/models/StudentsCourses';
import { StudentsCoursesService } from 'src/app/services/students-courses.service';
import { MatDialogRef} from '@angular/material/dialog'
@Component({
  selector: 'app-students-courses-list',
  templateUrl: './students-courses-list.component.html',
  styleUrls: ['./students-courses-list.component.css']
})
export class StudentsCoursesListComponent implements OnInit {
  courses: StudentsCourses[] = [];
  listCourses: any = [];
  id:any;
  constructor(private studentsCourses: StudentsCoursesService, private modalService: ModalService, public dialogRef: MatDialogRef<ModalComponent>) { }
 

  ngOnInit(): void {
    this.id = this.modalService.formlistCourse.get('Id')?.value;
    this.refreshCourses(this.id);
  }

  onClose() {
    this.modalService.form.reset();
    this.modalService.initializeFormGroup();
    this.dialogRef.close();
  }

  refreshCourses(id:any){
    this.studentsCourses.getStudentCourses(id).subscribe(
      res => {
      this.listCourses = res;
      },
      err => console.error(err)
    );
  }

  deleteCurso(id:any){
    this.studentsCourses.deleteStudentCourses(id).subscribe(
      res => {
        this.refreshCourses(this.id);
        this.modalService.success('Eliminacion Exitosa');
      },
      err => this.modalService.warn('Eliminacion No Exitosa')
    );
    
  }
  
}
