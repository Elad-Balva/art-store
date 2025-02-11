import { Model, DataTypes, Association } from 'sequelize';
import sequelize from '../config/db';
import User from './user';
import Item from './item';

class Cart extends Model {
  public id!: number;
  public userId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static associations: {
    items: Association<Cart, Item>;
  };

  public static async createCart(userId: number): Promise<Cart> {
    return Cart.create({ userId });
  }

  public static async getCartByUserId(userId: number): Promise<Cart | null> {
    return Cart.findOne({
      where: { userId },
      include: [Item],
    });
  }

  public static async addItemToCart(cartId: number, itemId: number): Promise<void> {
    const cart = await Cart.findByPk(cartId);
    if (cart) {
      const item = await Item.findByPk(itemId);
      if (item) {
        await (cart as any).addItem(item);
      }
    }
  }

  public static async removeItemFromCart(cartId: number, itemId: number): Promise<void> {
    const cart = await Cart.findByPk(cartId);
    if (cart) {
      const item = await Item.findByPk(itemId);
      if (item) {
        await (cart as any).removeItem(item);
      }
    }
  }

  public static async checkout(cartId: number): Promise<void> {
    const cart = await Cart.findByPk(cartId);
    if (cart) {
      // Process payment and clear cart
      await (cart as any).setItems([]);
    }
  }
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
      references: {
        model: 'users',
        key: 'id',
      },
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'carts',
  }
);

Cart.belongsTo(User, { foreignKey: 'userId' });
Cart.belongsToMany(Item, { through: 'CartItems', foreignKey: 'cartId' });

export default Cart;