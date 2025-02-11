import { Router } from 'express';
import { addItemToCart, removeItemFromCart, checkout } from '../controllers/cartController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.post('/add', authMiddleware, addItemToCart);
router.post('/remove', authMiddleware, removeItemFromCart);
router.post('/checkout', authMiddleware, checkout);

export default router;