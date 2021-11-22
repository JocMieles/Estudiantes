import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentListComponent } from './components/student-list/student-list.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/students',
    pathMatch: 'full'
  },
  {
    path: 'students',
    component: StudentListComponent,
  },
  {
    path: 'updateStudents',
    component: StudentListComponent
  },
  {
    path: 'newStudents',
    component: StudentListComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
