import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import './home.css';
import { useContext } from 'react';
import { hotelContext } from '../../context/Context';
import Card from '../card/Card';

function Home() {
  const { hotelData } = useContext(hotelContext);
  return (
    <Box className='home'>
      <SimpleGrid minChildWidth='270px' spacing='40px'>
        {hotelData &&
          hotelData.map((hotel) => <Card key={hotel.id} hotel={hotel} />)}
      </SimpleGrid>
    </Box>
  );
}

export default Home;
