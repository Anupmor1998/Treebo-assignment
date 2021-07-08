import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';
function Card({ hotel }) {
  const prices = Object.values(hotel.price).filter((ele) => ele !== null);

  const findMinPrice = (prices) => {
    let low = Number.POSITIVE_INFINITY;
    if (prices.length === 0) {
      return 'Sold Out';
    }

    for (let i = 0; i < prices.length; i++) {
      if (prices[i] < low) {
        low = prices[i];
      }
    }
    return low;
  };

  let minPrice = findMinPrice(prices);

  return (
    <Link to={{ pathname: `/hotel/${hotel.id}` }}>
      <Box className='card'>
        <Heading fontSize='28px'>{hotel.name}</Heading>
        <Text>{`${hotel.locality ? hotel.locality : ''} ${hotel.city}`}</Text>
        <Text>{minPrice}</Text>
      </Box>
    </Link>
  );
}

export default Card;
