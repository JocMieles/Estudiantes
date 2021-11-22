import express, {Application, application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import studentsRoutes from './routes/studentsRoutes';
import studentCoursesRoutes from './routes/studentCoursesRoutes'
import coursesRoutes from './routes/coursesRoutes'

class Sever {

    public app: Application; 
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.port || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    routes(): void {
        this.app.use('/',indexRoutes);
        this.app.use('/api/students',studentsRoutes);
        this.app.use('/api/courses',coursesRoutes);
        this.app.use('/api/studentCourses',studentCoursesRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'))
        }
        );
    }
}

const server = new Sever();
server.start();