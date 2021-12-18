import React, { useState } from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';

function CartedProductOptionAction({ option: { count, cost, stock }}) {
  const [quantity, setQuantity] = useState(count);

  const handleChange = (event) => {
    const quantity = event.target.value;

    if (quantity > stock) {
      alert('선택한 개수보다 재고가 모자랍니다.');
    } else {
      setQuantity(event.target.value);
      // TODO 변경된 정보 업데이트 (상위로 전달)
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
