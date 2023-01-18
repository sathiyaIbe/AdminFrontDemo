import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './BookingStatus.css';
import Header from '../../core/header/header';
import Sidebar from '../../core/Sidebar/Sidebar';
import { AiOutlineMenu } from 'react-icons/ai'
import {RxCross1} from 'react-icons/rx'

const BookingStatus = () => {
  const [sidebar, setSidebar]=useState(false)

  const menuIcon= sidebar ?  <RxCross1 className='cancel-icon'/> :<AiOutlineMenu className='menu-icon'/>


  return(
  <div className="BookingStatus" data-testid="BookingStatus">
   <Header />
   <div className='sidebar-page-container'>
   {sidebar && <Sidebar /> }
   <button className='menu-btn' onClick={()=>(setSidebar(!sidebar))} type='button'> {menuIcon} </button>

   <div className='booking-status-body-container'>
   <h1>Booking Status page</h1>
   </div>
   </div>
   
  
  
  </div>
)
  }

BookingStatus.propTypes = {};

BookingStatus.defaultProps = {};

export default BookingStatus;
