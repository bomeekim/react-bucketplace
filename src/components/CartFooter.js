import {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { Box, Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import { calcSelectedProductPrice } from '../utils/common';
import { styled } from '@mui/material/styles';

const DefaultTypography = styled(Typography)(() => ({
  fontWeight: 400,
  fontSize: 16,
  lineHeight: '24px',
  letterSpacing: '-0.3px',
}));

const BoldTypography = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: 16,
  lineHeight: '20px',
  letterSpacing: '-0.3px',
}));


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
              mb: 20,
            }}
      >
        <CardContent sx={{ p: 0 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 12 }}>
            <DefaultTypography>총 상품금액</DefaultTypography>
            <BoldTypography>{totalPrice?.toLocaleString()}원</BoldTypography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 26 }}>
            <DefaultTypography>총 배송비</DefaultTypography>
            <BoldTypography>{totalDeliveryFee?.toLocaleString()}원</BoldTypography>
          </Box>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 0 }}>
          <BoldTypography>결제금액</BoldTypography>
          <Typography
            fontWeight={700}
            fontSize={24}
            lineHeight="32px"
            letterSpacing="-0.3px"
          >
            {(totalPrice + totalDeliveryFee)?.toLocaleString()}원
          </Typography>
        </CardActions>
      </Card>
      <Button
        variant="contained"
        sx={{ boxShadow: 0,
              height: 50,
              borderRadius: 1,
              py: 15,
              color: '#fff',
              fontWeight: 700,
              fontSize: 16,
              lineHeight: '20px',
              letterSpacing: '-0.3px' }}
        onClick={() => clickFunc(filteredCartList)}
        disabled={filteredCartList.length === 0}
      >
        {filteredCartList.length}개의 상품 구매하기
      </Button>
    </Box>
  )
}

export default CartFooter;
