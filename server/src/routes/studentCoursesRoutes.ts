import { Router } from 'express';

import { getCoursesStudent, deleteCoursesStudent , createCoursesStudent } from '../controllers/studentCoursesControllers'

class StudentsRoutes{

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/:IdEstudiante', getCoursesStudent)
        this.router.post('/', createCoursesStudent)
        this.router.delete('/:Id', deleteCoursesStudent)
    }

}

const studentsRoutes = new StudentsRoutes();
export default studentsRoutes.router;
