import { Card, CardHeader, CardContent, CardActions, Typography } from '@mui/material';
import CartContentBody from './CartContentBody';

function CartContent() {
  return (
    <Card variant="outlined">
      {/*TODO style -> class*/}
      <CardHeader
        title="상품 배송 이름"
        sx={{ borderBottom: 1 }}
        style={{ textAlign: 'center' }}
      />
      <CardContent>
        <CartContentBody />
      </CardContent>
      <CardActions
        sx={{ borderTop: 1, justifyContent: 'center' }}
      >
        <Typography sx={{ fontSize: 14 }} align="center">
          배송비 41,000원
        </Typography>
      </CardActions>
    </Card>
  )
}

export default CartContent;
