"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const coursesControllers_1 = require("../controllers/coursesControllers");
class CursoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', coursesControllers_1.getCourses);
    }
}
const cursoRoutes = new CursoRoutes();
exports.default = cursoRoutes.router;
