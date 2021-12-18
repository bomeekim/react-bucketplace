import React from 'react';

import {
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CartedProductOptionAction from './CartedProductOptionAction';

function CartedProductOption({ productId, option: { explain, ...rest } }) {
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
        <ListItemText primary={explain}/>
        <CartedProductOptionAction option={{...rest}} />
      </ListItem>
    </List>
  )
}

export default CartedProductOption;
