import { Request, Response } from 'express';
import Item from '../models/item';

export const getItems = async (req: Request, res: Response) => {
  try {
    const items = await Item.getAllItems();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getItemById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const item = await Item.getItemById(Number(id));
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const createItem = async (req: Request, res: Response) => {
  const { name, price, category, imageUrl, available } = req.body;

  try {
    const item = await Item.createItem({ name, price, category, imageUrl, available });
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const updateItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, price, category, imageUrl, available } = req.body;

  try {
    const [affectedCount, affectedRows] = await Item.updateItem(Number(id), { name, price, category, imageUrl, available });
    if (affectedCount === 0) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json(affectedRows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedCount = await Item.deleteItem(Number(id));
    if (deletedCount === 0) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};