import { Card, CardHeader, CardContent, CardActions, Typography } from '@mui/material';
import CartContentBody from './CartContentBody';

function CartBody({ cartContent }) {
  const {
    options,
    product: { delivery, ...rest }
  } = cartContent;

  return (
    <Card variant="outlined">
      {/*TODO style -> class*/}
      <CardHeader
        title={delivery.title}
        sx={{ borderBottom: 1 }}
        style={{ textAlign: 'center' }}
      />
      <CardContent>
        <CartContentBody product={{ options, delivery, ...rest }} />
      </CardContent>
      <CardActions
        sx={{ borderTop: 1, justifyContent: 'center' }}
      >
        <Typography sx={{ fontSize: 14 }} align="center">
          {/*TODO 세 자리 수 콤마*/}
          배송비 {delivery.fee === 0 ? '무료' : `${delivery.fee}원`}
        </Typography>
      </CardActions>
    </Card>
  )
}

export default CartBody;
