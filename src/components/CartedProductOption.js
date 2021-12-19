import React from 'react';

import {
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CartedProductOptionAction from './CartedProductOptionAction';

function CartedProductOption({ option: { explain, ...rest } }) {
  return (
    <List sx={{ width: '100%', bgcolor: '#F7F9FA', p: 10, mb: 8, borderRadius: 1 }}>
      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <IconButton
            edge="end"
            aria-level="delete"
            sx={{ p: 0 }}
          >
            <CloseIcon sx={{ color: '#2F3438' }} />
          </IconButton>
        }
        sx={{ '& .MuiListItemSecondaryAction-root': { top: 10 },
              display: 'flex',
              flexDirection: 'column',
              p: 0 }}

      >
        <ListItemText
          primary={explain}
          sx={{ '& .MuiListItemText-primary': {
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: '20px',
                  letterSpacing: '-0.3px',
                  color: '#2F3438',
                  mb: 10,
                },
                m: 0,
             }}
        />
        <CartedProductOptionAction option={{...rest}} />
      </ListItem>
    </List>
  )
}

export default CartedProductOption;
