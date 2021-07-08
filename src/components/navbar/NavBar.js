import { Box, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';

function NavBar() {
  return (
    <Box className='navbar'>
      <Link to='/'>
        <Image className='logo' src={logo} />
      </Link>
      <Link to='/'>
        <Text className='title'>Treebo Hotels</Text>
      </Link>
    </Box>
  );
}

export default NavBar;
