import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedAll } from '../redux/modules/cart';
import { Box, Button, Checkbox, FormGroup, FormControlLabel  } from '@mui/material';

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
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={handleChange}
            />
          }
          label="모두 선택"
        />
      </FormGroup>
      <Box>
        {/*TODO 버튼 사이에 파이프라인 추가*/}
        <Button>품절 모두 삭제</Button>
        <Button>선택삭제</Button>
      </Box>
    </Box>
  )
}

export default CartHeader;
