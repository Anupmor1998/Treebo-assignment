import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const hotelContext = createContext();

function ContextProvider({ children }) {
  const listUrl = 'https://www.mocky.io/v2/5a7f23442e00005000b56873';
  const priceUrl = 'https://www.mocky.io/v2/5a7f24f02e00005200b56875';
  const detailsUrl = 'https://www.mocky.io/v2/5a7f265b2e00005d00b56877';

  const [hotelList, setHotelList] = useState();
  const [hotelPriceList, setHotelPriceList] = useState();
  const [hotelDetails, setHotelDetails] = useState();
  const merge = [];

  useEffect(() => {
    fetchHotels();
    fetchHotelsPrice();
    fetchHotelsDetails();
  }, []);

  const fetchHotels = async () => {
    const res = await fetch(listUrl);
    const resJson = await res.json();
    setHotelList(resJson.data);
  };

  const fetchHotelsPrice = async () => {
    const res = await fetch(priceUrl);
    const resJson = await res.json();
    setHotelPriceList(resJson.data);
  };

  const fetchHotelsDetails = async () => {
    const res = await fetch(detailsUrl);
    const resJson = await res.json();
    setHotelDetails(resJson.data);
  };

  const mergeHotelData = (arr1, arr2) => {
    let start = 0;

    while (start < arr1.length) {
      if (arr1[start].id === arr2[start].id) {
        merge.push({ ...arr1[start], ...arr2[start] });
      }
      start = start + 1;
    }
  };

  hotelList && hotelPriceList && mergeHotelData(hotelList, hotelPriceList);
  // console.log(merge);

  return (
    <hotelContext.Provider
      value={{ hotelData: merge, hotelDetails, hotelPriceList }}
    >
      {children}
    </hotelContext.Provider>
  );
}

export default ContextProvider;
