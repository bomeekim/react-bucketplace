import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import CartHeader from '../components/CartHeader';
import CartBody from '../components/CartBody';
import CartFooter from '../components/CartFooter';
import CART_API from '../api/cart';
import {setCartList} from '../redux/modules/cart';

function Cart() {
  const selectedAll = useSelector(state => state.cart.selectedAll);
  const cartList = useSelector(state => state.cart.cartList);
  const dispatch = useDispatch();
  const onSetCartList = (cartList) => dispatch(setCartList(cartList));

  // 카트 목록 조회 API
  const getCartList = async () => {
    try {
      const { status, data: { carts, description } } = await CART_API.LIST();

      if (status === 200 && carts.length > 0 && description) {
        const deliveryMethodText = description['delivery.method'];

        onSetCartList(carts.map(obj => {
          const methodText = deliveryMethodText[obj.product.delivery.method];
          const isBucketPlaceShip = obj.product.delivery.method === 3;

          return {
            ...obj,
            product: {
              ...obj.product,
              delivery: {
                ...obj.product.delivery,
                method: methodText,
                title: isBucketPlaceShip ? methodText : `${obj.product.seller.nickname} 배송`
              }
            },
            checked: selectedAll,
          }
        }));
      }
    } catch (e) {
      console.error(e);
      alert('장바구니를 조회할 수 없습니다.');
    }
  }

  useEffect(() => {
    getCartList();
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={7}>
        <CartHeader />
      </Grid>
      <Grid item xs={8} md={7} lg={8}>
        {cartList && cartList.map((obj, index) =>
          <CartBody cartContent={obj} key={index} />)}
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <CartFooter />
      </Grid>
    </Grid>
  )
}

export default Cart;
