import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedAll } from '../redux/modules/cart';
import { Box, Button, Checkbox, FormGroup, FormControlLabel, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const CartHeaderButton = styled(Button)(() => ({
  fontSize: 12,
  lineHeight: '16px',
  letterSpacing: '-0.3px',
  color: '#2F3438',
}));

function CartHeader() {
  const selectedAll = useSelector(state => state.cart.selectedAll);
  const [checked, setChecked] = useState(selectedAll);
  const dispatch = useDispatch();
  const onSetSelectedAll = (isAll) => dispatch(setSelectedAll(isAll));

  const handleChange = () => {
    setChecked(!checked);
    onSetSelectedAll(!checked);
  };

  useEffect(() => {
    setChecked(selectedAll)
  }, [selectedAll])

  return (
    <Box
      sx={{ display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 30,
            mx: 16 }}
    >
      <FormGroup>
        <FormControlLabel
          sx={{ '& .MuiTypography-root': { fontSize: 16, fontWeight: 400, lineHeight: '20px', letterSpacing: '-0.3px' },
                m: 0 }}
          control={
            <Checkbox
              checked={checked}
              onChange={handleChange}
              sx={{ p: 4 }}
            />
          }
          label="모두선택"
        />
      </FormGroup>
      <Box
        sx={{ display: 'flex',
              alignItems: 'center',
              width: 'fit-content' }}
      >
        <CartHeaderButton>품절 모두 삭제</CartHeaderButton>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ height: 12, my: 10 }}
        />
        <CartHeaderButton>선택삭제</CartHeaderButton>
      </Box>
    </Box>
  )
}

export default CartHeader;
