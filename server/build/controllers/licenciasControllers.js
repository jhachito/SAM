"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class LicenciasController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO licenciasDeSoftware SET ?', [req.body]);
            console.log(req.body);
            res.json({ text: 'Licencia ingresada' });
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM licenciasDeSoftware', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT * FROM licenciasDeSoftware WHERE id = ?', [id], function (err, result, fields) {
                if (result.length > 0) {
                    return res.json(result[0]);
                }
                else {
                    res.status(404).json({ text: "La licencia no existe" });
                    //if (err) throw err;
                }
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE licenciasDeSoftware SET number = ?  WHERE id = ?', [req.body.number, id], function (err, result, fields) {
                if (result.affectedRows > 0) {
                    res.json({ text: 'Licencia actualizada' });
                }
                else {
                    res.status(404).json({ text: "La licencia no existe" });
                }
            });
            //res.json({ text: 'actualizando Licencia con id: ' + req.params.id });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM licenciasDeSoftware WHERE id = ?', [id], function (err, result, fields) {
                if (result.affectedRows > 0) {
                    res.json({ text: 'Licencia eliminada' });
                }
                else {
                    res.status(404).json({ text: "La licencia no existe" });
                }
                //res.json(result);
            });
        });
    }
}
const licenciasController = new LicenciasController();
exports.default = licenciasController;
