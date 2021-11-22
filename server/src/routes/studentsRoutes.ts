import { Router } from 'express';

import {getStudents, createStudent, deleteStudent, getStudent, updateStudent, spCreate} from '../controllers/studentsControllers'

class StudentsRoutes{

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', getStudents);
        this.router.get('/:id', getStudent);
        this.router.post('/', createStudent);
        this.router.delete('/:id', deleteStudent);
        this.router.put('/:id', updateStudent);
        this.router.post('/spCreate/', spCreate);
    }

}

const studentsRoutes = new StudentsRoutes();
export default studentsRoutes.router;