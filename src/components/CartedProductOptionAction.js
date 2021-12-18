import React, { useState } from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { changeOption } from '../redux/modules/cart';

function CartedProductOptionAction({ option }) {
  const { count, cost, stock } = option
  const [quantity, setQuantity] = useState(count);
  const dispatch = useDispatch();
  const onChangeOption = (option) => dispatch(changeOption(option));

  const handleChange = (event) => {
    const quantity = event.target.value;

    if (quantity > stock) {
      alert('선택한 개수보다 재고가 모자랍니다.');
    } else {
      // state 를 변경한다.
      setQuantity(quantity);

      // reducer를 통해 option 값을 변경한다.
      onChangeOption({
        ...option,
        count: quantity,
      });
    }
  };

  const options = Array(10).fill().map((arr, i) => i+1);

  return (
    <FormControl
      fullWidth
      sx={{ display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
    >
      <Select
        value={quantity}
        onChange={handleChange}
      >
        {options.map(val =>
          <MenuItem value={val} key={val}>{val}</MenuItem>)
        }
      </Select>
      {/*TODO 세자리수 필터*/}
      <Typography>{cost}원</Typography>
    </FormControl>
  )
}

export default CartedProductOptionAction;
