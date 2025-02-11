import { Router } from 'express';
import authMiddleware from '../middleware/authMiddleware';
import { getItems, getItemById, createItem, updateItem, deleteItem } from '../controllers/itemController';

const router = Router();

router.get('/', getItems);
router.get('/:id', getItemById);
router.post('/', authMiddleware, createItem);
router.put('/:id', authMiddleware, updateItem);
router.delete('/:id', authMiddleware, deleteItem);

export default router;