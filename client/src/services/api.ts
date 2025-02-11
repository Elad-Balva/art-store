import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const registerUser = (username: string, password: string) => {
  return api.post('/auth/register', { username, password });
};

export const loginUser = (username: string, password: string) => {
  return api.post('/auth/login', { username, password });
};

export const getItems = () => {
  return api.get('/items');
};

export const addItemToCart = (userId: number, itemId: number) => {
  return api.post('/cart/add', { userId, itemId });
};

export const removeItemFromCart = (cartId: number, itemId: number) => {
  return api.post('/cart/remove', { cartId, itemId });
};

export const checkout = (cartId: number, paymentDetails: any) => {
  return api.post('/cart/checkout', { cartId, paymentDetails });
};