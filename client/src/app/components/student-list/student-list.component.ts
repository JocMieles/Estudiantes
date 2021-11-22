import { Component, OnInit, ViewChild } from '@angular/core';

import { StudentsService } from '../../services/students.service';

import { StudentsCoursesService } from '../../services/students-courses.service';

import { ModalService } from '../../services/modal.service';
import { ModalComponent } from './../modal/modal.component';
import { StudentsCoursesListComponent } from './../students-courses-list/students-courses-list.component';

import { Students } from '../../models/Students';
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ListCourses } from '../../models/ListCourses'


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  bodyText: string | any;
  students: any = [];
  coursesStudents: any = [];
  student: Students = {
    TipoIdentificacion: '',
    Identificacion: '',
    Nombre1: '',
    Nombre2: '',
    Apellido1: '',
    Apellido2: '',
    Email: '',
    Celular: '',
    Direccion: '',
    Ciudad: ''

  };

  @ViewChild(MatSort) sort: MatSort | any;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  searchKey: string | any;
  listData: MatTableDataSource<any> | any;
  displayedColumns: string[] = ['Identificacion', 'Nombre1',  'Apellido1', 'Email', 'actions'];
  arr: Students[] = [];
  arrC: ListCourses[] = [];
  constructor(private studentsService: StudentsService, private modalService: ModalService, private studentsCoursesService: StudentsCoursesService, private dialog: MatDialog) { }

  refreshStudents() {
    this.arr = [];
    this.studentsService.getStudents().subscribe(
      res => {
        this.students = res;

        this.students.map((_item: any) => {
          this.arr.push(_item);
        });

        this.listData = new MatTableDataSource(this.arr);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
        this.listData.filterPredicate = (data: { [x: string]: string; }, filter: any) => {
          return this.displayedColumns.some(ele => {
            return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
          });
        };
      },
      err => console.error(err)
    );
  }

  ngOnInit(): void {
    console.log('ose')
    this.refreshStudents();
  }

  coursesStudent(idEstudiante: any, row: any) {
    this.modalService.populateForm(row);
    this.modalService.populateFormlistCourse({ Id: idEstudiante });
    this.studentsCoursesService.getStudentCourses(idEstudiante).subscribe(
      res => {
        this.coursesStudents = res;
        this.coursesStudents.map((_item: any) => {
          this.arrC.push(_item);
        });
      },
      err => console.error(err)
    );

    this.modalService.enviar(idEstudiante);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(StudentsCoursesListComponent, dialogConfig);
  }

  onEdit(row: any) {
    this.modalService.initializeFormGroup();
    this.modalService.formCourse.reset();
    this.modalService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(ModalComponent, dialogConfig);
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  deleteStudent(idEstudiante: string | any) {
    this.studentsService.deleteStudent(idEstudiante).subscribe(
      res => {
        this.modalService.success('Eliminacion Exitosa');
        this.refreshStudents();
      },
      err => this.modalService.warn("Debe borrar los cursos primero")
    )
  }

}
