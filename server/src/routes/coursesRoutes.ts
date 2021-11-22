import { Router } from 'express';

import { getCourses } from '../controllers/coursesControllers'

class CursoRoutes{

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', getCourses);
    }

}

const cursoRoutes = new CursoRoutes();
export default cursoRoutes.router;