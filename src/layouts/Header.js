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

function Header() {
  const menuList = [ '커뮤니티', '스토어', '전문가' ];
  const profileImageUrl = 'http://file3.instiz.net/data/cached_img/upload/2018/03/07/19/8944da1586aaadaa1f60c3ca27f2deeb.jpg';

  return (
    <AppBar
      color="white"
      position="absolute"
      sx={{ display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            px: 60,
            pt: 25,
            py: 26,
            pb: 26,
            boxShadow: 0 }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} width="74px" height="40px" />
        {menuList.map(name =>
          <Button key={name}>{name}</Button>)}
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
        />
        <IconButton aria-label="bookmark">
          <BookmarkBorderIcon />
        </IconButton>
        <IconButton aria-label="cart">
          <ShoppingCartOutlinedIcon />
        </IconButton>
        <IconButton aria-label="notification">
          <NotificationsOutlinedIcon />
        </IconButton>
        <Avatar alt="profile" src={profileImageUrl} />
        <Button variant="contained" sx={{ boxShadow: 0, ml: 4 }}>글쓰기</Button>
      </Box>
    </AppBar>
  )
}

export default Header;

