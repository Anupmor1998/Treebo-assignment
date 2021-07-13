import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';
function Card({ hotel }) {
  const prices = Object.values(hotel.price).filter((ele) => ele !== null);

  const findMinPrice = (prices) => {
    let low = Number.POSITIVE_INFINITY;

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
        <Image
          className='hotel-image'
          src='https://ik.imagekit.io/anupmor302/valeriia-bugaiova-_pPHgeHz1uk-unsplash_A6DRS9Tgs.jpg'
        />
        <Box className='hotel-info'>
          <Heading className='heading'>{hotel.name}</Heading>

          <Text className='location'>
            <i className='fas fa-map-marker-alt'></i>
            &nbsp;&nbsp;
            {hotel.locality ? hotel.locality : ''} {hotel.city}
          </Text>

          <Text className='price'>
            {minPrice !== Infinity ? `₹ ${minPrice}` : 'Sold Out'}
          </Text>
        </Box>
      </Box>
    </Link>
  );
}

export default Card;
