import { Box, Button, Checkbox, FormGroup, FormControlLabel  } from '@mui/material';

function CartHeader() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="모두 선택" />
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
