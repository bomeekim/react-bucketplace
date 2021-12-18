import { Box, Card, CardContent, CardActions, Typography, Button } from '@mui/material';

function CartFooter() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Card variant="outlined">
        <CardContent>
          <Box  sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography>총 상품금액</Typography>
            <Typography>945,000원</Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography>결제금액</Typography>
          <Typography>945,000원</Typography>
        </CardActions>
      </Card>
      <Button variant="contained" sx={{ boxShadow: 0 }}>2개의 상품 구매하기</Button>
    </Box>
  )
}

export default CartFooter;
