import { Card, CardHeader, CardContent, CardActions, Typography } from '@mui/material';
import CartContentBody from './CartContentBody';

function CartBody({ cartContent }) {
  const { product: { delivery } } = cartContent;

  return (
    <Card variant="outlined">
      {/*TODO style -> class*/}
      <CardHeader
        title={delivery.title}
        sx={{ borderBottom: 1 }}
        style={{ textAlign: 'center' }}
      />
      <CardContent>
        <CartContentBody props={cartContent} />
      </CardContent>
      <CardActions
        sx={{ borderTop: 1, justifyContent: 'center' }}
      >
        <Typography sx={{ fontSize: 14 }} align="center">
          배송비 {delivery.fee === 0 ? '무료' : `${delivery.fee?.toLocaleString()}원`}
        </Typography>
      </CardActions>
    </Card>
  )
}

export default CartBody;
