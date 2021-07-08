import { Box, Image, Text } from '@chakra-ui/react';
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
      <Box className='img-section'>
        <Image
          className='img'
          src='https://ik.imagekit.io/anupmor302/valeriia-bugaiova-_pPHgeHz1uk-unsplash_A6DRS9Tgs.jpg'
        />
      </Box>
      <Box className='info-section'>
        {policies &&
          policies.map((p) => (
            <Box className='policies' key={uuidv4()}>
              {p}
            </Box>
          ))}
        <Text className='sub-heading'>
          Amenities &nbsp;
          <i className='icon fas fa-hotel'></i>
        </Text>
        <ul className='list'>
          {essentials &&
            essentials.map((e) => (
              <li className='list-items' key={uuidv4()}>
                {e}
              </li>
            ))}
        </ul>
        <Text className='sub-heading'>
          Pricing &nbsp;<i className='icon fas fa-hand-holding-usd'></i>
        </Text>
        <Box className='pricing-section'>
          {prices &&
            prices.map((price) => (
              <Box className='price-card' key={uuidv4()}>
                <Text className='room-type'>{price}</Text>
                <Text className='room-price'>
                  {hotelPrice[0].price[price] !== null ? (
                    <span>₹ {hotelPrice[0].price[price]}</span>
                  ) : (
                    'Sold Out'
                  )}
                </Text>
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
}

export default HotelDetails;
