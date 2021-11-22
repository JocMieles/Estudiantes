import {Request, Response} from 'express';

import {sql, getConnection} from '../database'

export const getStudents = async (req: Request, res: Response) => {
    try {
      const pool: any = await getConnection();
      const result = await pool.request().query("SELECT * from Estudiante");
      res.json(result.recordset);
    } catch (error: any) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const spCreate = async(req: Request, res: Response) =>{
    try {
      const { TipoIdentificacion, Identificacion, Nombre1, Nombre2, Apellido1, Apellido2, Email, Celular, Direccion, Ciudad}  = req.body;
    console.log('req.body:'+req.body);
    const pool: any = await getConnection();
    const result = await pool.request()
    .input("TipoIdentificacion", sql.VarChar, TipoIdentificacion)
    .input("Identificacion", sql.VarChar, Identificacion)
    .input("Nombre1", sql.VarChar, Nombre1)
    .input("Nombre2", sql.VarChar, Nombre2)
    .input("Apellido1", sql.VarChar, Apellido1)
    .input("Apellido2", sql.VarChar, Apellido2)
    .input("Email", sql.VarChar, Email)
    .input("Celular", sql.VarChar, Celular)
    .input("Direccion", sql.VarChar, Direccion)
    .input("Ciudad", sql.VarChar, Ciudad)
    .query('EXEC SPEstudiante @i_TipoIdentificacion = @TipoIdentificacion, @i_Identificacion = @Identificacion, @i_Nombre1 = @Nombre1, @i_Nombre2 = @Nombre2, @i_Apellido1 = @Apellido1, @i_Apellido2 = @Apellido2, @i_Email = @Email, @i_Celular = @Celular, @i_Direccion = @Direccion, @i_Ciudad = @Ciudad ;');
    res.status(200);
    res.json(result.recordset[0]);
  } catch (error: any) {
    res.status(500);
    res.send(error.message);
  }
    
  }

  export const createStudent = async (req: Request, res: Response) => {
    console.log('req.createStudent:');
    try {
        const { TipoIdentificacion, Identificacion, Nombre1, Nombre2, Apellido1, Apellido2, Email, Celular, Direccion, Ciudad}  = req.body;
      console.log('req.body:'+req.body);
      const pool: any = await getConnection();
      const result = await pool.request()
      .input("TipoIdentificacion", sql.VarChar, TipoIdentificacion)
      .input("Identificacion", sql.VarChar, Identificacion)
      .input("Nombre1", sql.VarChar, Nombre1)
      .input("Nombre2", sql.VarChar, Nombre2)
      .input("Apellido1", sql.VarChar, Apellido1)
      .input("Apellido2", sql.VarChar, Apellido2)
      .input("Email", sql.VarChar, Email)
      .input("Celular", sql.VarChar, Celular)
      .input("Direccion", sql.VarChar, Direccion)
      .input("Ciudad", sql.VarChar, Ciudad)
      .query('INSERT INTO Estudiante  VALUES(@TipoIdentificacion,@Identificacion,@Nombre1,@Nombre2,@Apellido1,@Apellido2,@Email,@Celular,@Direccion,@Ciudad)');
      res.status(200);
      res.json({message: 'Student Saved'});
    } catch (error: any) {
      res.status(500);
      res.send(error.message);
    }
  };

export const deleteStudent  = async (req: Request, res: Response) => {
    try {
      const pool: any = await getConnection();
      const result = await pool.request().query("DELETE Estudiante where Id = " + req.params.id);
      res.json(result.recordset);
      res.status(200);
    } catch (error: any) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const updateStudent = async (req: Request, res: Response) => {
    try {
        const { TipoIdentificacion, Identificacion, Nombre1, Nombre2, Apellido1, Apellido2, Email, Celular, Direccion, Ciudad}  = req.body;
      const pool: any = await getConnection();
      const result = await pool.request()
      .input("TipoIdentificacion", sql.VarChar, TipoIdentificacion)
      .input("Identificacion", sql.VarChar, Identificacion)
      .input("Nombre1", sql.VarChar, Nombre1)
      .input("Nombre2", sql.VarChar, Nombre2)
      .input("Apellido1", sql.VarChar, Apellido1)
      .input("Apellido2", sql.VarChar, Apellido2)
      .input("Email", sql.VarChar, Email)
      .input("Celular", sql.VarChar, Celular)
      .input("Direccion", sql.VarChar, Direccion)
      .input("Ciudad", sql.VarChar, Ciudad)
      .input("Id", req.params.id)
      .query('UPDATE Estudiante SET TipoIdentificacion = @TipoIdentificacion, Identificacion = @Identificacion, Nombre1 = @Nombre1, Nombre2 = @Nombre2, Apellido1 = @Apellido1, Apellido2 = @Apellido2, Email = @Email, Celular = @Celular, Direccion = @Direccion, Ciudad = @Ciudad WHERE Id = @Id');
      res.status(200);
      res.json(result.recordset);
    } catch (error: any) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const getStudent = async (req: Request, res: Response) => {
    try {
      const pool: any = await getConnection();
      const result = await pool.request().query("SELECT * from Estudiante where Id = " + req.params.id);
      
      console.log(result.recordset.length);
        if (result.recordset.length > 0) {
            res.json(result.recordset[0]);
        }else{
          res.status(404).json({ text: "The game doesn't exits" })
        }
        
    } catch (error: any) {
      res.status(500);
      res.send(error.message);
    }
  };