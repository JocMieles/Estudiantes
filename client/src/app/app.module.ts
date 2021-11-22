import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { ReactiveFormsModule,FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentListComponent } from './components/student-list/student-list.component';

import { StudentsService } from './services/students.service';
import { StudentsCoursesService } from './services/students-courses.service';
import { CoursesService } from './services/courses.service';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { StudentsCoursesListComponent } from './components/students-courses-list/students-courses-list.component';
import { ModalComponent } from './components/modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatNativeDateModule} from '@angular/material/core';
import {MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule  } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { MatRadioModule } from  '@angular/material/radio';
import { MatSelectModule  } from  '@angular/material/select';
import {  MatDatepickerModule } from  '@angular/material/datepicker';
import {  MatToolbarModule } from  '@angular/material/toolbar';
import {  MatIconModule } from  '@angular/material/icon';
import {  MatSnackBarModule } from  '@angular/material/snack-bar';
import {  MatDialogModule,MatDialogRef  } from  '@angular/material/dialog';
import {  MatTableModule } from  '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StudentFormComponent,
    StudentListComponent,
    CoursesListComponent,
    StudentsCoursesListComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    FormsModule,
    MatTabsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTableModule
  ],
  providers: [
    StudentsService,
    StudentsCoursesService,
    CoursesService,
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
