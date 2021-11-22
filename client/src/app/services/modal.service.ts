import { Injectable, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { environment } from '../../environments/environment'

@Injectable({ providedIn: 'root' })
export class ModalService {
  @Output() open: EventEmitter<any> = new EventEmitter();
  private modals: any[] = [];
  constructor(public snackBar: MatSnackBar, private http: HttpClient) { }

  API_URI = environment.API_URI;

  form: FormGroup = new FormGroup({
    Id: new FormControl(null),
    TipoIdentificacion: new FormControl('', Validators.required),
    Identificacion: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
    Nombre1: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.pattern('[A-Za-z]+')]),  //[a-zA-Z]
    Nombre2: new FormControl('', Validators.pattern('[a-zA-Z]*')),
    Apellido1: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]+')]),
    Apellido2: new FormControl('', Validators.pattern('[a-zA-Z]*')),
    Email: new FormControl('', Validators.email),
    Celular: new FormControl('', [Validators.minLength(8), Validators.pattern('[0-9]*')]),
    Direccion: new FormControl(''),
    Ciudad: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]+')])
  });

  formCourse: FormGroup = new FormGroup({
    Id: new FormControl(null),
    IdCurso: new FormControl('', Validators.required),
    IdEstudiante: new FormControl(''),
    NotaFinal: new FormControl(0.0, [Validators.required, Validators.pattern('^[0-5]\\d*(\\.\\d{1,2})?$')])
  });

  formlistCourse: FormGroup = new FormGroup({
    Id: new FormControl(null)
  });

  initializeFormGroup() {
    this.form.setValue({
      Id: null,
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
    });
  }

  initializeFormGroupCourse() {
    this.formCourse.setValue({
      Id: null,
      IdCurso: 0,
      IdEstudiante: 0,
      NotaFinal: null
    });
  }

  initializeFormlistCourse() {
    this.formCourse.setValue({
      Id: null
    });
  }

  enviar(id: any) {
    this.open.emit(id)
  }

  updateStudent(student: any) {
    return this.http.put(`${this.API_URI}/students/${student.$Id}`, student);
  }

  populateForm(student: any) {
    this.form.setValue(_.omit(student));
  }

  populateFormlistCourse(student: any) {
    this.formlistCourse.setValue(_.omit(student));
  }

  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  }

  success(msg: any) {
    this.config['panelClass'] = ['notification', 'success'];
    this.snackBar.open(msg, '', this.config);
  }

  warn(msg: any) {
    this.config['panelClass'] = ['notification', 'warn'];
    this.snackBar.open(msg, '', this.config);
  }
}