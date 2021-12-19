import {
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function CartedProductItem({ name, delivery, imageUrl }) {
  return (
    <List sx={{ width: '100%', p: 0 }}>
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
        sx={{ '& .MuiListItemSecondaryAction-root': { top: 10 }, p: 0 }}
      >
        <ListItemAvatar sx={{ mt: 0, mr: 12, mb: 15 }}>
          <Avatar
            variant="square"
            alt="Product Image"
            src={imageUrl}
            sx={{ height: 70, width: 69.76, borderRadius: 1 }}
          />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={`${delivery.fee} | ${delivery.method}`}
          sx={{ '& .MuiListItemText-primary': {
                  fontSize: 16,
                  fontWeight: 500,
                  lineHeight: '24px',
                  letterSpacing: '-0.3px',
                  color: '#2F3438',
                  mb: 4,
                },
                '& .MuiListItemText-secondary': {
                  fontSize: 12,
                  fontWeight: 400,
                  lineHeight: '16px',
                  letterSpacing: '-0.3px',
                  color: '#828C94'
                },
                my: 0 }}
        />
      </ListItem>
    </List>
  )
}

export default CartedProductItem;
