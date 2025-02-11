import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';
import User from './user';
import Item from './item';

class Cart extends Model {
  public id!: number;
  public userId!: number;
}

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'cart',
  }
);

Cart.belongsTo(User, { foreignKey: 'userId' });
Cart.belongsToMany(Item, { through: 'CartItems', foreignKey: 'cartId' });

export default Cart;