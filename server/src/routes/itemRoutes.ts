import { Router } from 'express';
import { getItems, addItem, updateItem, deleteItem } from '../controllers/itemController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.get('/', getItems);
router.post('/', authMiddleware, addItem);
router.put('/:id', authMiddleware, updateItem);
router.delete('/:id', authMiddleware, deleteItem);

export default router;