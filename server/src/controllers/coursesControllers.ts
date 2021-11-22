import {Request, Response} from 'express';

import {sql, getConnection} from '../database'

export const getCourses = async (req: Request, res: Response) => {
    try {
      const pool: any = await getConnection();
      const result = await pool.request().query("SELECT * from Curso");
      res.json(result.recordset);
    } catch (error: any) {
      res.status(500);
      res.send(error.message);
    }
  };

  


  