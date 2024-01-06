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
router.delete('/finance/:id', FinanceControllers.deleteFinance);
// Route de Buscas
router.get('/search', FinanceControllers.findAllFinance);
// Route GroupBy
router.get('/pesquisa/finance/categorias', FinanceControllers.findValores);


export {router};