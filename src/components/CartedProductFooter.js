import {Box, Button, Divider, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterOptionButton = styled(Button)(() => ({
  fontSize: 12,
  lineHeight: '16px',
  letterSpacing: '-0.3px',
  color: '#2F3438',
}));

function CartedProductFooter({ productPrice }) {
  return (
    <Box
      sx={{ width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row'}}>
        <FooterOptionButton>옵션변경</FooterOptionButton>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ height: 12, my: 10 }}
        />
        <FooterOptionButton>바로 구매</FooterOptionButton>
      </Box>
      <Box>
        <Typography
          fontWeight={700}
          fontSize={18}
          lineHeight="24px"
          letterSpacing="-0.3px"
          color="#2F3438"
        >
          {productPrice?.toLocaleString()}원
        </Typography>
      </Box>
    </Box>
  )
}

export default CartedProductFooter;
