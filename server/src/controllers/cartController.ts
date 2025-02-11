import { Request, Response } from 'express';
import Cart from '../models/cart';
import Item from '../models/item';

export const getCart = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const cart = await Cart.getCartByUserId(Number(userId));
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const addItemToCart = async (req: Request, res: Response) => {
  const { cartId, itemId } = req.body;

  try {
    await Cart.addItemToCart(Number(cartId), Number(itemId));
    res.status(200).json({ message: 'Item added to cart' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const removeItemFromCart = async (req: Request, res: Response) => {
  const { cartId, itemId } = req.body;

  try {
    await Cart.removeItemFromCart(Number(cartId), Number(itemId));
    res.status(200).json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const checkout = async (req: Request, res: Response) => {
  const { cartId } = req.body;

  try {
    await Cart.checkout(Number(cartId));
    res.status(200).json({ message: 'Checkout successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};