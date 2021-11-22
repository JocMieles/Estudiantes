import {Request, Response} from 'express';
import indexRoutes from '../routes/indexRoutes';

class IndexController{

    public index(req: Request,res: Response) {
        res.send('JOSE MIELES')
    }
  
}

const indexController = new IndexController();
export default indexController;