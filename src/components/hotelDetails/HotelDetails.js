import { Box, Image, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { hotelContext } from '../../context/Context';
import { v4 as uuidv4 } from 'uuid';
import './hotelDetails.css';
import { useParams } from 'react-router-dom';
import NavBar from '../navbar/NavBar';

function HotelDetails() {
  const { id } = useParams();
  const { hotelDetails, hotelPriceList, hotelList } = useContext(hotelContext);
  const policies = hotelDetails ? hotelDetails.policies : null;
  const essentials = hotelDetails ? hotelDetails.essentials : null;

  const hotelTitle = hotelList
    ? hotelList.filter((ele) => {
        let hotel;
        if (ele.id === Number(id)) {
          hotel = ele;
        }
        return hotel;
      })
    : null;
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
    <Box>
      <NavBar />
      <Box className='hotelDetail'>
        <Box className='img-section'>
          <Image
            className='img'
            src='https://ik.imagekit.io/anupmor302/valeriia-bugaiova-_pPHgeHz1uk-unsplash_A6DRS9Tgs.jpg'
          />
        </Box>
        <Box className='info-section'>
          <Box>
            {hotelTitle &&
              hotelTitle.map((hotel) => (
                <Box key={hotel.id}>
                  <Text className='hotel-title'>{hotel.name}</Text>
                  <Text className='hotel-city'>
                    <i className='fas fa-map-marker-alt'></i> &nbsp;{hotel.city}
                  </Text>
                </Box>
              ))}
          </Box>
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
          <Box className='essentials'>
            {essentials &&
              essentials.map((e) => (
                <Box className='items' key={uuidv4()}>
                  <Text>{e}</Text>
                </Box>
              ))}
          </Box>
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
    </Box>
  );
}

export default HotelDetails;
