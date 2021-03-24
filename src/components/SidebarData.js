import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InfoIcon from '@material-ui/icons/Info';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const SidebarData = [
  {
    title: 'Profile',
    path: '/profile',
    icon: <AccountCircleIcon />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/about',
    icon: <InfoIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/',
    icon: <ShoppingCartIcon />,
    cName: 'nav-text'
  },
];
