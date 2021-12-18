import { cloneDeep } from 'lodash';

/* 액션 타입 */
const SET_SELECTED_ALL = 'cart/SET_SELECTED_ALL';
const SET_CART_LIST = 'cart/SET_CART_LIST';
const UPDATE_CART_LIST = 'cart/UPDATE_CART_LIST';

/* 액션 생성함수 */
export const setSelectedAll = isAll => ({ type: SET_SELECTED_ALL, isAll });
export const setCartList = cartList => ({ type: SET_CART_LIST, cartList });
export const updateCartList = (id, updated) => ({ type: UPDATE_CART_LIST, id, updated });

/* 초기 상태 */
const initialState = {
  selectedAll: true,
  cartList: [],
  totalPrice: 0,
  totalDeliveryFee: 0,
}

/* 리듀서 */
export default function cart(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_ALL:
      return {
        ...state,
        cartList: state.cartList.map(obj => {
          return {
            ...obj,
            checked: action.isAll,
          }
        }),
        selectedAll: action.isAll,
      }
    case SET_CART_LIST:
      return {
        ...state,
        cartList: action.cartList,
      }
    case UPDATE_CART_LIST:
      const cartList = cloneDeep(state.cartList);
      const newCartList = cartList.map(obj => {
        return obj.id === action.id ? { ...obj, ...action.updated } : obj;
      });

      return {
        ...state,
        cartList: newCartList,
        selectedAll: newCartList.every(obj => obj.checked),
      }
    default:
      return state;
  }
}
