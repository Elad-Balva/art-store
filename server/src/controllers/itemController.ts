import { Request, Response } from 'express';
import Item from '../models/item';

export const getItems = async (req: Request, res: Response) => {
  try {
    const items = await Item.findAll({ where: { available: true } });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const addItem = async (req: Request, res: Response) => {
  const { name, price, category, imageUrl } = req.body;

  try {
    const item = await Item.create({ name, price, category, imageUrl });
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const updateItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, price, category, imageUrl } = req.body;

  try {
    const item = await Item.findByPk(id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    await item.update({ name, price, category, imageUrl });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const item = await Item.findByPk(id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    await item.destroy();
    res.status(200).json({ message: 'Item deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};