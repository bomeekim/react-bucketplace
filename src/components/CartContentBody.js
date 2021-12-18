import { Grid, Checkbox } from '@mui/material';
import CartedProductItem from './CartedProductItem';
import CartedProductOption from './CartedProductOption';
import CartedProductFooter from './CartedProductFooter';

function CartContentBody({ product }) {
  const { options, brand, imageUrl, name, delivery } = product;
  const initialValue = 0;
  const totalPrice = product.options.reduce(
    (acc, cur) => acc + (cur.cost * cur.count)
  , initialValue);
  console.log(totalPrice);

  return (
    <Grid container spacing={2}>
      <Grid item xs={1}>
        <Checkbox defaultChecked />
      </Grid>
      <Grid item xs={11}>
        {/*상품 정보*/}
        <CartedProductItem
          name={`[${brand.name}] ${name}`}
          delivery={{ fee: `${delivery.fee === 0 ? '무료배송' : `배송비 ${delivery.fee}원`}`,
                      method: `${delivery.method}`
                    }}
          imageUrl={imageUrl}
        />
        {/*상품 옵션 정보*/}
        {options && options.map(obj => <CartedProductOption option={obj} />)}
        {/*상품 총 금액*/}
        <CartedProductFooter totalPrice={totalPrice} />
      </Grid>
    </Grid>
  )
}

export default CartContentBody;
