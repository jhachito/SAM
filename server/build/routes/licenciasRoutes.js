"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const licenciasControllers_1 = __importDefault(require("../controllers/licenciasControllers"));
class LicenciasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', licenciasControllers_1.default.list);
        this.router.get('/:id', licenciasControllers_1.default.getOne);
        this.router.post('/', licenciasControllers_1.default.create);
        this.router.delete('/:id', licenciasControllers_1.default.delete);
        this.router.put('/:id', licenciasControllers_1.default.update);
    }
}
const licenciasRoutes = new LicenciasRoutes();
exports.default = licenciasRoutes.router;
