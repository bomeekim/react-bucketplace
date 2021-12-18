import React from 'react';

import {
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CartedProductOptionAction from './CartedProductOptionAction';

function CartedProductOption() {
  return (
    // TODO theme 에 bgColor 추가
    <List sx={{ width: '100%', bgcolor: '#F7F9FA' }}>
      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <IconButton edge="end" aria-level="delete">
            <CloseIcon />
          </IconButton>
        }
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        <ListItemText primary="옵션 제목"/>
        <CartedProductOptionAction />
      </ListItem>
    </List>
  )
}

export default CartedProductOption;
