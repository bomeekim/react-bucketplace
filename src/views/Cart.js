import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import CartHeader from '../components/CartHeader';
import CartBody from '../components/CartBody';
import CartFooter from '../components/CartFooter';
import CART_API from '../api/cart';
import {setCartList} from '../redux/modules/cart';
import AlertDialog from '../components/AlertDialog';
import { invert, cloneDeep } from 'lodash';

function Cart() {
  // redux
  const selectedAll = useSelector(state => state.cart.selectedAll);
  const cartList = useSelector(state => state.cart.cartList);
  const dispatch = useDispatch();
  const onSetCartList = (cartList) => dispatch(setCartList(cartList));

  // 배송 수단 state
  const [method, setMethod] = useState({});

  // 다이얼로그 관련 state
  const [showDialog, setShowDialog] = useState(false);
  const [dialogText, setDialogText] = useState('');

  // 카트 목록 조회 API
  const getCartList = async () => {
    try {
      const { status, data: { carts, description } } = await CART_API.LIST();

      if (status === 200 && carts.length > 0 && description) {
        const deliveryMethodText = description['delivery.method'];
        setMethod(deliveryMethodText);

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

  const handleOrderButtonClick = (order) => {
    const invertedMethod = invert(cloneDeep(method));

    // 기존 데이터 형태로 변경한다.
    const convertedOrder = order.map(obj => {
      const methodId = Number(invertedMethod[obj.product.delivery.method]);

      return {
        id: obj.id,
        options: obj.options,
        product: {
          ...obj.product,
          delivery: {
            fee: obj.product.delivery.fee,
            method: methodId,
          }
        }
      }
    });

    // 다이얼로그를 띄운다.
    setShowDialog(true);
    setDialogText(JSON.stringify(convertedOrder));
  }

  useEffect(() => {
    getCartList();
  }, []);

  return (
    <Grid container spacing={20}>
      <Grid item xs={8}>
        <CartHeader />
      </Grid>
      <Grid item xs={8} md={7} lg={8}>
        {cartList && cartList.map((obj, index) =>
          <CartBody cartContent={obj} key={index} />)}
      </Grid>
      <Grid className="cart-footer-wrapper" item xs={12} md={5} lg={4}>
        <CartFooter clickFunc={handleOrderButtonClick} />
      </Grid>

      <AlertDialog
        showDialog={showDialog}
        contentText={dialogText}
        clickCloseFunc={(val) => setShowDialog(val)}
      />
    </Grid>
  )
}

export default Cart;
