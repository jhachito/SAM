import { Router } from 'express';
import licenciasController from '../controllers/licenciasControllers';

class LicenciasRoutes  {
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', licenciasController.list);
        this.router.get('/:id', licenciasController.getOne);
        this.router.post('/', licenciasController.create);
        this.router.delete('/:id', licenciasController.delete);
        this.router.put('/:id', licenciasController.update);
    }
}
const licenciasRoutes = new LicenciasRoutes();
export default licenciasRoutes.router;