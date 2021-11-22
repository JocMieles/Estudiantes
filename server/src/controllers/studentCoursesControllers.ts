import {Request, Response} from 'express';

import {sql, getConnection} from '../database'

export const getCoursesStudent = async (req: Request, res: Response) => {
    try {
      const pool: any = await getConnection();
      const result = await pool.request().query("SELECT Id, Materia = (select Nombre from Curso where Id = a.IdCurso), NotaFinal from EstudianteCurso a where IdEstudiante = "+req.params.IdEstudiante);
      res.json(result.recordset);
    } catch (error: any) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const createCoursesStudent = async (req: Request, res: Response) => {
    try {
        const { IdEstudiante, IdCurso, NotaFinal}  = req.body;
        console.log('req.body:'+IdEstudiante);
      const pool: any = await getConnection();
      const result = await pool.request()
      .input("IdEstudiante", sql.VarChar, IdEstudiante)
      .input("IdCurso", sql.VarChar, IdCurso)
      .input("NotaFinal", sql.VarChar, NotaFinal)
      .query('INSERT INTO EstudianteCurso VALUES(@IdEstudiante,@IdCurso,@NotaFinal)');
      res.status(200);
      res.json({message: 'Student Saved'});
    } catch (error: any) {
      res.status(500);
      res.send(error.message);
    }
  };

export const deleteCoursesStudent = async (req: Request, res: Response) => {
    try {
      const pool: any = await getConnection();
      const result = await pool.request().query("DELETE EstudianteCurso where Id = " + req.params.Id);
      res.status(200);
      res.json(result.recordset);
    } catch (error: any) {
      res.status(500);
      res.send(error.message);
    }
  };
