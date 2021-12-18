import { Grid } from '@mui/material';
import CartContent from '../components/CartContent';

function Cart() {
  // TODO api 연동

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <CartContent />
      </Grid>
    </Grid>
  )
}

export default Cart;
