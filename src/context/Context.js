import React, { useState, useEffect, createContext } from 'react';

export const hotelContext = createContext();

function ContextProvider({ children }) {
  const listUrl = process.env.REACT_APP_LIST_URL;
  const priceUrl = process.env.REACT_APP_PRICE_URL;
  const detailsUrl = process.env.REACT_APP_DETAILS_URL;

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
      value={{ hotelData: merge, hotelDetails, hotelPriceList, hotelList }}
    >
      {children}
    </hotelContext.Provider>
  );
}

export default ContextProvider;
