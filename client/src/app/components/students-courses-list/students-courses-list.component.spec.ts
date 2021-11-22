import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsCoursesListComponent } from './students-courses-list.component';

describe('StudentsCoursesListComponent', () => {
  let component: StudentsCoursesListComponent;
  let fixture: ComponentFixture<StudentsCoursesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsCoursesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsCoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
