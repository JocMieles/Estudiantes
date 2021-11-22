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
exports.deleteCoursesStudent = exports.createCoursesStudent = exports.getCoursesStudent = void 0;
const database_1 = require("../database");
const getCoursesStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield (0, database_1.getConnection)();
        const result = yield pool.request().query("SELECT Id, Materia = (select Nombre from Curso where Id = a.IdCurso), NotaFinal from EstudianteCurso a where IdEstudiante = " + req.params.IdEstudiante);
        res.json(result.recordset);
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
});
exports.getCoursesStudent = getCoursesStudent;
const createCoursesStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { IdEstudiante, IdCurso, NotaFinal } = req.body;
        console.log('req.body:' + IdEstudiante);
        const pool = yield (0, database_1.getConnection)();
        const result = yield pool.request()
            .input("IdEstudiante", database_1.sql.VarChar, IdEstudiante)
            .input("IdCurso", database_1.sql.VarChar, IdCurso)
            .input("NotaFinal", database_1.sql.VarChar, NotaFinal)
            .query('INSERT INTO EstudianteCurso VALUES(@IdEstudiante,@IdCurso,@NotaFinal)');
        res.status(200);
        res.json({ message: 'Student Saved' });
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
});
exports.createCoursesStudent = createCoursesStudent;
const deleteCoursesStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield (0, database_1.getConnection)();
        const result = yield pool.request().query("DELETE EstudianteCurso where Id = " + req.params.Id);
        res.status(200);
        res.json(result.recordset);
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
});
exports.deleteCoursesStudent = deleteCoursesStudent;
