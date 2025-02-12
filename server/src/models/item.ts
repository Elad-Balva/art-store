import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db';

class Item extends Model {
  public id!: number;
  public name!: string;
  public price!: number;
  public category!: string;
  public imageUrl!: string;
  public available!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static async createItem(data: { name: string; price: number; category: string; imageUrl?: string; available?: boolean }): Promise<Item> {
    return Item.create(data);
  }

  public static async getAllItems(): Promise<Item[]> {
    return Item.findAll();
  }

  public static async getItemById(id: number): Promise<Item | null> {
    return Item.findByPk(id);
  }

  public static async updateItem(id: number, data: Partial<Item>): Promise<[number, Item[]]> {
    return Item.update(data, {
      where: { id },
      returning: true,
    });
  }

  public static async deleteItem(id: number): Promise<number> {
    return Item.destroy({ where: { id } });
  }
}

Item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    available: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    tableName: 'items',
  }
);

export default Item;