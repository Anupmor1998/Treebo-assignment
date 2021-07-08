import { Box, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';

function NavBar() {
  return (
    <Link to='/'>
      <Box className='navbar'>
        <Image className='logo' src={logo} />
        <Text className='title'>Treebo Hotels</Text>
      </Box>
    </Link>
  );
}

export default NavBar;
