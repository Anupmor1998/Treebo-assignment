import { Box } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { hotelContext } from '../../context/Context';
import { v4 as uuidv4 } from 'uuid';
import './hotelDetails.css';
import { useParams } from 'react-router-dom';

function HotelDetails() {
  const { id } = useParams();
  const { hotelDetails, hotelPriceList } = useContext(hotelContext);
  const policies = hotelDetails ? hotelDetails.policies : null;
  const essentials = hotelDetails ? hotelDetails.essentials : null;

  const hotelPrice = hotelPriceList
    ? hotelPriceList.filter((ele) => {
        let price;
        if (ele.id === Number(id)) {
          price = ele.price;
        }

        return price;
      })
    : null;

  const prices = hotelPrice && Object.keys(hotelPrice[0].price);

  return (
    <Box className='hotelDetail'>
      <Box></Box>
      <Box></Box>
      {policies &&
        policies.map((p) => (
          <Box className='policies' key={uuidv4()}>
            {p}
          </Box>
        ))}
      {essentials &&
        essentials.map((e, idx) => (
          <Box className='' key={uuidv4()}>
            {e}
          </Box>
        ))}
      {prices &&
        prices.map((price) => (
          <Box key={uuidv4()}>
            {price} :{' '}
            {hotelPrice[0].price[price] !== null
              ? hotelPrice[0].price[price]
              : 'Sold Out'}
          </Box>
        ))}
    </Box>
  );
}

export default HotelDetails;
