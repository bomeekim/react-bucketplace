import { Box, Button, Typography } from '@mui/material';

function CartedProductFooter() {
  return (
    <Box
      sx={{ display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
      }}
    >
      <Box>
        {/*TODO 버튼 사이에 파이프라인 추가*/}
        <Button>옵션변경</Button>
        <Button>바로 구매</Button>
      </Box>
      <Typography>415,000원</Typography>
    </Box>
  )
}

export default CartedProductFooter;
