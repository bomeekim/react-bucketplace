import { Card, CardHeader, CardContent, CardActions, Typography } from '@mui/material';
import CartContentBody from './CartContentBody';

function CartBody({ cartContent }) {
  const { product: { delivery } } = cartContent;

  return (
    <Card
      variant="outlined"
      sx={{ borderColor: '#EAEDEF',
            borderWidth: 1,
            borderRadius: 1,
            mb: 20,
      }}
    >
      <CardHeader
        title={delivery.title}
        sx={{ '& .MuiTypography-root': {
                color: '#2F3438',
                fontSize: 16,
                letterSpacing: '-0.3px',
                fontWeight: 500
              },
              borderBottom: 1,
              borderColor: '#EAEDEF',
              textAlign: 'center',
              py: 10 }}
      />
      <CardContent>
        <CartContentBody props={cartContent} />
      </CardContent>
      <CardActions
        sx={{ borderTop: 1,
              borderColor: '#EAEDEF',
              justifyContent: 'center',
              py: 10 }}
      >
        <Typography
          fontWeight={400}
          fontSize={16}
          lineHeight="20px"
          letterSpacing="-0.3px"
          color="#2F3438"
          align="center"
        >
          배송비 {delivery.fee === 0 ? '무료' : `${delivery.fee?.toLocaleString()}원`}
        </Typography>
      </CardActions>
    </Card>
  )
}

export default CartBody;
