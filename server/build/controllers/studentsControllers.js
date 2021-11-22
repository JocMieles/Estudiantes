"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudent = exports.updateStudent = exports.deleteStudent = exports.createStudent = exports.spCreate = exports.getStudents = void 0;
const database_1 = require("../database");
const getStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield (0, database_1.getConnection)();
        const result = yield pool.request().query("SELECT * from Estudiante");
        res.json(result.recordset);
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
});
exports.getStudents = getStudents;
const spCreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { TipoIdentificacion, Identificacion, Nombre1, Nombre2, Apellido1, Apellido2, Email, Celular, Direccion, Ciudad } = req.body;
        console.log('req.body:' + req.body);
        const pool = yield (0, database_1.getConnection)();
        const result = yield pool.request()
            .input("TipoIdentificacion", database_1.sql.VarChar, TipoIdentificacion)
            .input("Identificacion", database_1.sql.VarChar, Identificacion)
            .input("Nombre1", database_1.sql.VarChar, Nombre1)
            .input("Nombre2", database_1.sql.VarChar, Nombre2)
            .input("Apellido1", database_1.sql.VarChar, Apellido1)
            .input("Apellido2", database_1.sql.VarChar, Apellido2)
            .input("Email", database_1.sql.VarChar, Email)
            .input("Celular", database_1.sql.VarChar, Celular)
            .input("Direccion", database_1.sql.VarChar, Direccion)
            .input("Ciudad", database_1.sql.VarChar, Ciudad)
            .query('EXEC SPEstudiante @i_TipoIdentificacion = @TipoIdentificacion, @i_Identificacion = @Identificacion, @i_Nombre1 = @Nombre1, @i_Nombre2 = @Nombre2, @i_Apellido1 = @Apellido1, @i_Apellido2 = @Apellido2, @i_Email = @Email, @i_Celular = @Celular, @i_Direccion = @Direccion, @i_Ciudad = @Ciudad ;');
        res.status(200);
        res.json(result.recordset[0]);
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
});
exports.spCreate = spCreate;
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('req.createStudent:');
    try {
        const { TipoIdentificacion, Identificacion, Nombre1, Nombre2, Apellido1, Apellido2, Email, Celular, Direccion, Ciudad } = req.body;
        console.log('req.body:' + req.body);
        const pool = yield (0, database_1.getConnection)();
        const result = yield pool.request()
            .input("TipoIdentificacion", database_1.sql.VarChar, TipoIdentificacion)
            .input("Identificacion", database_1.sql.VarChar, Identificacion)
            .input("Nombre1", database_1.sql.VarChar, Nombre1)
            .input("Nombre2", database_1.sql.VarChar, Nombre2)
            .input("Apellido1", database_1.sql.VarChar, Apellido1)
            .input("Apellido2", database_1.sql.VarChar, Apellido2)
            .input("Email", database_1.sql.VarChar, Email)
            .input("Celular", database_1.sql.VarChar, Celular)
            .input("Direccion", database_1.sql.VarChar, Direccion)
            .input("Ciudad", database_1.sql.VarChar, Ciudad)
            .query('INSERT INTO Estudiante  VALUES(@TipoIdentificacion,@Identificacion,@Nombre1,@Nombre2,@Apellido1,@Apellido2,@Email,@Celular,@Direccion,@Ciudad)');
        res.status(200);
        res.json({ message: 'Student Saved' });
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
});
exports.createStudent = createStudent;
const deleteStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield (0, database_1.getConnection)();
        const result = yield pool.request().query("DELETE Estudiante where Id = " + req.params.id);
        res.json(result.recordset);
        res.status(200);
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
});
exports.deleteStudent = deleteStudent;
const updateStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { TipoIdentificacion, Identificacion, Nombre1, Nombre2, Apellido1, Apellido2, Email, Celular, Direccion, Ciudad } = req.body;
        const pool = yield (0, database_1.getConnection)();
        const result = yield pool.request()
            .input("TipoIdentificacion", database_1.sql.VarChar, TipoIdentificacion)
            .input("Identificacion", database_1.sql.VarChar, Identificacion)
            .input("Nombre1", database_1.sql.VarChar, Nombre1)
            .input("Nombre2", database_1.sql.VarChar, Nombre2)
            .input("Apellido1", database_1.sql.VarChar, Apellido1)
            .input("Apellido2", database_1.sql.VarChar, Apellido2)
            .input("Email", database_1.sql.VarChar, Email)
            .input("Celular", database_1.sql.VarChar, Celular)
            .input("Direccion", database_1.sql.VarChar, Direccion)
            .input("Ciudad", database_1.sql.VarChar, Ciudad)
            .input("Id", req.params.id)
            .query('UPDATE Estudiante SET TipoIdentificacion = @TipoIdentificacion, Identificacion = @Identificacion, Nombre1 = @Nombre1, Nombre2 = @Nombre2, Apellido1 = @Apellido1, Apellido2 = @Apellido2, Email = @Email, Celular = @Celular, Direccion = @Direccion, Ciudad = @Ciudad WHERE Id = @Id');
        res.status(200);
        res.json(result.recordset);
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
});
exports.updateStudent = updateStudent;
const getStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield (0, database_1.getConnection)();
        const result = yield pool.request().query("SELECT * from Estudiante where Id = " + req.params.id);
        console.log(result.recordset.length);
        if (result.recordset.length > 0) {
            res.json(result.recordset[0]);
        }
        else {
            res.status(404).json({ text: "The game doesn't exits" });
        }
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
});
exports.getStudent = getStudent;
