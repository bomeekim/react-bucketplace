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
  console.log(name, delivery, imageUrl);
  return (
    <List sx={{ width: '100%' }}>
      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <IconButton edge="end" aria-level="delete">
            <CloseIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar variant="square" alt="Product Image" src={imageUrl} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={`${delivery.fee} | ${delivery.method}`}
        />
      </ListItem>
    </List>
  )
}

export default CartedProductItem;
