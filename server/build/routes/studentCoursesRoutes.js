"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentCoursesControllers_1 = require("../controllers/studentCoursesControllers");
class StudentsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:IdEstudiante', studentCoursesControllers_1.getCoursesStudent);
        this.router.post('/', studentCoursesControllers_1.createCoursesStudent);
        this.router.delete('/:Id', studentCoursesControllers_1.deleteCoursesStudent);
    }
}
const studentsRoutes = new StudentsRoutes();
exports.default = studentsRoutes.router;
