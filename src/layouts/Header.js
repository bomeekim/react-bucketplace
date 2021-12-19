import React from 'react'
import {
  AppBar,
  Box,
  Button,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Avatar
} from '@mui/material';
import {
  Search as SearchIcon,
  PhotoCamera as PhotoCameraIcon,
  BookmarkBorder as BookmarkBorderIcon,
  ShoppingCartOutlined as ShoppingCartOutlinedIcon,
  NotificationsOutlined as NotificationsOutlinedIcon,
} from '@mui/icons-material';
import logo from '../assets/img-logo.jpg';
import { styled } from '@mui/material/styles';

const MenuButton = styled(Button)(() => ({
  fontSize: 18,
  fontWeight: 700,
  lineHeight: '24px',
  letterSpacing: '-0.3px',
  color: '#2F3438',
  marginRight: 30,
}));

function Header() {
  const menuList = [ '커뮤니티', '스토어', '전문가' ];
  const profileImageUrl = 'http://file3.instiz.net/data/cached_img/upload/2018/03/07/19/8944da1586aaadaa1f60c3ca27f2deeb.jpg';

  return (
    <AppBar
      color="white"
      position="fixed"
      sx={{ display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            px: 60,
            pt: 25,
            pb: 26,
            boxShadow: 0 }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img className="img-logo" src={logo} height="40px" />
        {menuList.map(name =>
          <MenuButton key={name}>{name}</MenuButton>)}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <OutlinedInput
          size="small"
          startAdornment={
            <InputAdornment position="start">
              <IconButton
                edge="start"
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                edge="end"
              >
                <PhotoCameraIcon />
              </IconButton>
            </InputAdornment>
          }
          placeholder="오늘의 집 통합검색"
          sx={{ borderRadius: 1, borderColor: '#EAEDEF', mr: 24 }}
        />
        <IconButton
          aria-label="bookmark"
          sx={{ mr: 18, p: 0 }}
        >
          <BookmarkBorderIcon />
        </IconButton>
        <IconButton
          aria-label="cart"
          sx={{ mr: 18, p: 0 }}
        >
          <ShoppingCartOutlinedIcon />
        </IconButton>
        <IconButton
          aria-label="notification"
          sx={{ mr: 20, p: 0 }}
        >
          <NotificationsOutlinedIcon />
        </IconButton>
        <Avatar
          alt="profile"
          src={profileImageUrl}
          sx={{ mr: 20, p: 0 }}
        />
        <Button
          variant="contained"
          sx={{ boxShadow: 0, color: '#fff' }}
        >
          글쓰기
        </Button>
      </Box>
    </AppBar>
  )
}

export default Header;

