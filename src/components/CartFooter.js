import {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { Box, Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import { calcSelectedProductPrice } from '../utils/common';

function CartFooter({ clickFunc }) {
  const cartList = useSelector(state => state.cart.cartList);
  const [totalPrice, setTotalPrice] = useState();
  const [totalDeliveryFee, setTotalDeliveryFee] = useState();
  const filteredCartList = cartList.filter(obj => obj.checked); // 구매 체크된 상품만 필터

  // 구매 체크된 상품의 총 상품 금액을 계산한다.
  const getTotalPrice = () => filteredCartList.map(obj => {
    return calcSelectedProductPrice(obj);
  }).reduce((accPrice, curPrice) => accPrice + curPrice, 0);

  // 구매 체크된 상품의 총 배송비를 계산한다.
  const getTotalDeliveryFee = () => filteredCartList.reduce(
    (acc, cur) => acc + cur.product.delivery.fee, 0);

  useEffect(() => {
    setTotalPrice(getTotalPrice());
    setTotalDeliveryFee(getTotalDeliveryFee());
  }, [cartList]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Card
        variant="outlined"
        sx={{ borderColor: '#EAEDEF',
              borderWidth: 1,
              borderRadius: 1,
              pt: 18, px: 16, pb: 22,
            }}
      >
        <CardContent>
          <Box  sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography>총 상품금액</Typography>
            <Typography>{totalPrice?.toLocaleString()}원</Typography>
          </Box>
          <Box  sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography>총 배송비</Typography>
            <Typography>{totalDeliveryFee?.toLocaleString()}원</Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography>결제금액</Typography>
          <Typography>{(totalPrice + totalDeliveryFee)?.toLocaleString()}원</Typography>
        </CardActions>
      </Card>
      <Button
        variant="contained"
        sx={{ boxShadow: 0 }}
        onClick={() => clickFunc(filteredCartList)}
        disabled={filteredCartList.length === 0}
      >
        {filteredCartList.length}개의 상품 구매하기
      </Button>
    </Box>
  )
}

export default CartFooter;
