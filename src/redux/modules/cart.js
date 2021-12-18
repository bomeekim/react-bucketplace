import { cloneDeep } from 'lodash';

/* 액션 타입 */
const SET_SELECTED_ALL = 'cart/SET_SELECTED_ALL';
const SET_CART_LIST = 'cart/SET_CART_LIST';
const UPDATE_CART_LIST = 'cart/UPDATE_CART_LIST';
const CHANGE_OPTION = 'cart/CHANGE_OPTION';

/* 액션 생성함수 */
export const setSelectedAll = isAll => ({ type: SET_SELECTED_ALL, isAll });
export const setCartList = cartList => ({ type: SET_CART_LIST, cartList });
export const updateCartList = (id, updated) => ({ type: UPDATE_CART_LIST, id, updated });
export const changeOption = (option) => ({ type: CHANGE_OPTION, option});

/* 초기 상태 */
const initialState = {
  selectedAll: true,
  cartList: [],
}

/* 리듀서 */
export default function cart(state = initialState, action) {
  const cartList = cloneDeep(state.cartList);

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
      const newCartList = cartList.map(obj => {
        return obj.id === action.id ? { ...obj, ...action.updated } : obj;
      });

      return {
        ...state,
        cartList: newCartList,
        selectedAll: newCartList.every(obj => obj.checked),
      }
    case CHANGE_OPTION:
      let optionIndex = -1;

      /**
       * 변경한 옵션의 id로 기존 옵션 배열의 index를 찾는 함수
       * @param options 변경한 옵션
       * @returns {Number} 찾은 옵션의 index
       */
      const getOptionIndex = (options) => options.findIndex(option => option.id === action.option.id);

      // 해당 옵션이 위치한 장바구니 내 상품의 인덱스를 찾는다.
      const cartIndex = cartList.findIndex(obj => {
        // 해당 상품의 옵션 배열에서 변경한 옵션의 인덱스를 찾는다.
        optionIndex = getOptionIndex(obj.options);
        return optionIndex !== -1;
      });

      // 매칭된 상품의 옵션 정보를 변경해준다.
      cartList[cartIndex].options[optionIndex] = {
        ...cartList[cartIndex].options[optionIndex],
        ...action.option,
      };

      return {
        ...state,
        cartList,
      }
    default:
      return state;
  }
}
