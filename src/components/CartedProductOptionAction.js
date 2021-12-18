import React, { useState } from 'react';
import {
  FormControl,
  Select,
  MenuItem, Box, Typography,
} from '@mui/material';

function CartedProductOptionAction() {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (event) => {
    setQuantity(event.target.value);
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
      <Typography>21,000원</Typography>
    </FormControl>
  )
}

export default CartedProductOptionAction;
