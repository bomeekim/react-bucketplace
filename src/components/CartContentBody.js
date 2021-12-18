import { Grid, Checkbox } from '@mui/material';
import CartedProductItem from './CartedProductItem';
import CartedProductOption from './CartedProductOption';
import CartedProductFooter from './CartedProductFooter';

function CartContentBody() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={1}>
        <Checkbox />
      </Grid>
      <Grid item xs={11}>
        {/*상품 정보*/}
        <CartedProductItem />
        {/*상품 옵션 정보*/}
        <CartedProductOption />
        {/*상품 총 금액*/}
        <CartedProductFooter />
      </Grid>
    </Grid>
  )
}

export default CartContentBody;
