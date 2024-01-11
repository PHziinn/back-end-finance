import {Router} from 'express';
import FinanceControllers from '../controller/FinanceControllers.js';


const router = Router();

// Route Criar Finances
router.post('/criar/finance', FinanceControllers.createFinance);
// Route Listar todas Finances
router.get('/finances', FinanceControllers.findAllFinances);
// Route Lista por IDs
router.get('/finance/:id', FinanceControllers.findFinance);
// Route Deleta Finances
router.delete('/deletar/finance/:id', FinanceControllers.deleteFinance);
// Route GroupBy Somar Finances
router.get('/calcular/finance', FinanceControllers.findValores);


export {router};