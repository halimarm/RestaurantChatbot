// [POST] API Register
// [POST] API Login
// [POST] API Send Message
// [GET] API List Message / History Chat
// [GET] API List Product
// [POST] API Update product qty

import {request} from '../services/axios';

export const postRegister = (data: any) => {
  try {
    const result = request.post('/register', data);

    return result;
  } catch (error) {}
};

export const postLogin = (data: any) => {
  try {
    const result = request.post('/login', data);

    return result;
  } catch (error) {}
};

export const postSendMessage = (data: any) => {
  try {
    const result = request.post('/message', data);

    return result;
  } catch (error) {}
};

export const getMessagesHistory = () => {
  try {
    const result = request.get('/messages');

    return result;
  } catch (error) {}
};

export const getProductList = () => {
  try {
    const result = request.get('/products');

    return result;
  } catch (error) {}
};

export const postUpdateQuantity = (data: any) => {
  try {
    const result = request.get('/product', data);

    return result;
  } catch (error) {}
};
