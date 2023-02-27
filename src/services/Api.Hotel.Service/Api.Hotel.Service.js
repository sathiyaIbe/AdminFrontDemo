import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const getHotelDetails=async ()=>{
    return await axios.get('http://localhost:8080/hotel/api/hoteldetails')
}

export const hotelBookingDetails=async()=>{
    return await axios.get('http://localhost:8080/hotelbooking/api/getBookings')
}


