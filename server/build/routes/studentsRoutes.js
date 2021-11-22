"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentsControllers_1 = require("../controllers/studentsControllers");
class StudentsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', studentsControllers_1.getStudents);
        this.router.get('/:id', studentsControllers_1.getStudent);
        this.router.post('/', studentsControllers_1.createStudent);
        this.router.delete('/:id', studentsControllers_1.deleteStudent);
        this.router.put('/:id', studentsControllers_1.updateStudent);
        this.router.post('/spCreate/', studentsControllers_1.spCreate);
    }
}
const studentsRoutes = new StudentsRoutes();
exports.default = studentsRoutes.router;
