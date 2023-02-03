import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './BookingStatus.css';
import Header from '../../core/header/header';
import Sidebar from '../../core/Sidebar/Sidebar';
import { AiOutlineMenu } from 'react-icons/ai'
import {RxCross1} from 'react-icons/rx'
import DataTables from '../../core/DataTables/DataTables';
import Context from '../../services/Context/Context';

const BookingStatus = () => {
  const [sidebar, setSidebar]=useState(false)

  const menuIcon= sidebar ?  <RxCross1 className='menu-icon'/> :<AiOutlineMenu className='menu-icon'/>


  return(
    <Context.Consumer>
      {value=>{
        const {sidebar}=value
        return(

       
  <div className="BookingStatus" data-testid="BookingStatus">
    <div>
    <Header sidebar={sidebar} />
    <div className={`booking-status-body-container ${sidebar ?'sidebar-booking-status' :''}`}>

   <h1>Booking Status page</h1>
 
   
   </div>
   </div>
   
  
  
  </div>
   )
  }}
</Context.Consumer>
)
  }

BookingStatus.propTypes = {};

BookingStatus.defaultProps = {};

export default BookingStatus;
