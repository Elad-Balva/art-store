import { Router } from 'express';
import authMiddleware from '../middleware/authMiddleware';
import { getCart, addItemToCart, removeItemFromCart, checkout } from '../controllers/cartController';

const router = Router();

router.get('/:userId', authMiddleware, getCart);
router.post('/add', authMiddleware, addItemToCart);
router.post('/remove', authMiddleware, removeItemFromCart);
router.post('/checkout', authMiddleware, checkout);

export default router;