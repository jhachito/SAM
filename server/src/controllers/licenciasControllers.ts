import { Request, Response } from 'express';
import pool from '../database';

class LicenciasController {

    public async create(req: Request, res: Response) {
        await pool.query('INSERT INTO licenciasDeSoftware SET ?', [req.body]);
        console.log(req.body);
        res.json({ text: 'Licencia ingresada' });
    }

    public async list(req: Request, res: Response) {
        await pool.query('SELECT * FROM licenciasDeSoftware',
            function (err, result, fields) {
                if (err) throw err;
                res.json(result);
            }
        );
    }

    public async getOne(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('SELECT * FROM licenciasDeSoftware WHERE id = ?', [id],
            function (err, result, fields) {
                if (result.length > 0) {
                    return res.json(result[0]);
                } else {
                    res.status(404).json({ text: "La licencia no existe" });
                    //if (err) throw err;
                }

            }
        );
    }

    public async update(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE licenciasDeSoftware SET number = ?  WHERE id = ?', [req.body.number, id],
        function (err, result, fields) {
            if (result.affectedRows > 0) {
                res.json({ text: 'Licencia actualizada' });
            } else {
                res.status(404).json({ text: "La licencia no existe" });
            }            
        });
        //res.json({ text: 'actualizando Licencia con id: ' + req.params.id });
    }

    public async delete(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM licenciasDeSoftware WHERE id = ?', [id],
            function (err, result, fields) {
                if (result.affectedRows > 0) {
                    res.json({ text: 'Licencia eliminada' });
                } else {
                    res.status(404).json({ text: "La licencia no existe" });
                }
                //res.json(result);
            }
        );
    }

}

const licenciasController = new LicenciasController();
export default licenciasController;