import {
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function CartedProductItem() {
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
          <Avatar variant="square" alt="Product Image" src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163696601492151872.jpg?w=360&h=360&c=c&webp=1" />
        </ListItemAvatar>
        <ListItemText
          primary="상품 이름"
          secondary="배송 정보"
        />
      </ListItem>
    </List>
  )
}

export default CartedProductItem;
