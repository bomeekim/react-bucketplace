import connection from './index';

const BASE_URL = 'https://fe-assignment.todayhou.se';

const CART_API = {
  LIST: () => connection.get(`${BASE_URL}/carts`),
}

export default CART_API;
