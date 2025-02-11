import { Request, Response } from 'express';
import Cart from '../models/cart';
import Item from '../models/item';
import User from '../models/user';

export const addItemToCart = async (req: Request, res: Response) => {
  const { userId, itemId } = req.body;

  try {
    const cart = await Cart.findOne({ where: { userId } });
    const item = await Item.findByPk(itemId);

    if (!cart || !item) {
      return res.status(404).json({ message: 'Cart or Item not found' });
    }

    await cart.addItem(item);
    await item.update({ available: false });

    res.status(200).json({ message: 'Item added to cart' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const removeItemFromCart = async (req: Request, res: Response) => {
  const { cartId, itemId } = req.body;

  try {
    const cart = await Cart.findByPk(cartId);
    const item = await Item.findByPk(itemId);

    if (!cart || !item) {
      return res.status(404).json({ message: 'Cart or Item not found' });
    }

    await cart.removeItem(item);
    await item.update({ available: true });

    res.status(200).json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const checkout = async (req: Request, res: Response) => {
  const { cartId, paymentDetails } = req.body;

  try {
    // Handle payment processing logic here

    // If payment is successful, clear the cart
    const cart = await Cart.findByPk(cartId);
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    await cart.setItems([]); // Clear all items from the cart

    res.status(200).json({ message: 'Checkout successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};