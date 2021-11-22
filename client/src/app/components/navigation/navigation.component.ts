import { Component, OnInit } from '@angular/core';

import { ModalService } from '../../services/modal.service';
import { ModalComponent } from './../modal/modal.component';
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";


import { Students } from '../../models/Students';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

 

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

  constructor(public modalService: ModalService, private dialog:MatDialog, public dialogRef: MatDialogRef<ModalComponent>) { }

  ngOnInit(): void {
  }

  onCreate() {
    this.modalService.initializeFormGroup();
    this.modalService.formCourse.reset();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(ModalComponent,dialogConfig);
  }


  onClose() {
    this.modalService.form.reset();
    this.modalService.formCourse.reset();
    this.modalService.initializeFormGroup();
    this.modalService.initializeFormGroupCourse();
    this.dialogRef.close();
  }


}
