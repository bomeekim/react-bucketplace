import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Checkbox, Box } from '@mui/material';
import CartedProductItem from './CartedProductItem';
import CartedProductOption from './CartedProductOption';
import CartedProductFooter from './CartedProductFooter';
import { updateCartList } from '../redux/modules/cart';
import { calcSelectedProductPrice } from '../utils/common';

function CartContentBody({ props }) {
  const {
    checked,
    id,
    options,
    product: { brand, imageUrl, name, delivery }
  } = props;
  const [productPrice, setProductPrice] = useState();
  const dispatch = useDispatch();
  const onUpdateCartList = (id, updated) => dispatch(updateCartList(id, updated));

  const handleChange = () => {
    // 체크박스 클릭 시 cartList를 업데이트한다.
    onUpdateCartList(id, { checked: !checked });
  };

  useEffect(() => {
    // 상품의 옵션 포함 가격
    setProductPrice(calcSelectedProductPrice(props));
  }, [options]);

  return (
    <Grid container spacing={0}>
      <Box sx={{ mr: 12, display: 'flex', alignItems: 'flex-start' }}>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          sx={{ p: 0 }}
        />
      </Box>
      <Box sx={{ width: 'calc(100% - 36px)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        {/*상품 정보*/}
        <CartedProductItem
          name={`[${brand.name}] ${name}`}
          delivery={{ fee: `${delivery.fee === 0 ? '무료배송' : `배송비 ${delivery.fee}원`}`,
            method: `${delivery.method}`
          }}
          imageUrl={imageUrl}
        />
        {/*상품 옵션 정보*/}
        {options && options.map((obj, index) =>
          <CartedProductOption productId={id} option={obj} key={index} />)}
        {/*상품 금액*/}
        <CartedProductFooter productPrice={productPrice} />
      </Box>
    </Grid>
  )
}

export default CartContentBody;
