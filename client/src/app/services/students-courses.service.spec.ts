import { TestBed } from '@angular/core/testing';

import { StudentsCoursesService } from './students-courses.service';

describe('StudentsCoursesService', () => {
  let service: StudentsCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
