import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

class Item extends Model {
  public id!: number;
  public name!: string;
  public price!: number;
  public category!: string;
  public imageUrl!: string;
  public available!: boolean;
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
    modelName: 'item',
  }
);

export default Item;