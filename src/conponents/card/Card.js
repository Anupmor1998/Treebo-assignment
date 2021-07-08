import { Box, Heading, Image, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';
function Card({ hotel }) {
  const prices = Object.values(hotel.price).filter((ele) => ele !== null);

  const findMinPrice = (prices) => {
    let low = Number.POSITIVE_INFINITY;
    // if (prices.length === 0) {
    //   return 'Sold Out';
    // }

    for (let i = 0; i < prices.length; i++) {
      if (prices[i] < low) {
        low = prices[i];
      }
    }
    return low;
  };

  let minPrice = findMinPrice(prices);

  return (
    <Box className='card'>
      <Image
        className='hotel-image'
        src='https://ik.imagekit.io/anupmor302/valeriia-bugaiova-_pPHgeHz1uk-unsplash_A6DRS9Tgs.jpg'
      />
      <Box className='hotel-info'>
        <Link to={{ pathname: `/hotel/${hotel.id}` }}>
          <Heading className='heading'>{hotel.name}</Heading>
        </Link>
        <Text className='location'>
          <span>
            <i className='fas fa-map-marker-alt'></i>
            &nbsp;&nbsp;
            {hotel.locality ? hotel.locality : ''} {hotel.city}
          </span>
        </Text>
        <Spacer />
        <Text className='price'>
          {minPrice !== Infinity ? <span>₹ {minPrice}</span> : 'Sold Out'}
        </Text>
      </Box>
    </Box>
  );
}

export default Card;
