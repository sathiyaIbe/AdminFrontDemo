import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CabService.css';
import Header from '../../core/header/header';
import Sidebar from '../../core/Sidebar/Sidebar';
import { AiOutlineMenu } from 'react-icons/ai'
import {RxCross1} from 'react-icons/rx'

const CabService = () =>{ 
  const [sidebar, setSidebar]=useState(false)

  const menuIcon= sidebar ?  <RxCross1 className='cancel-icon'/> :<AiOutlineMenu className='menu-icon'/>

  
  return(
  <div className="CabService" data-testid="CabService">
   <Header />
   <div className='sidebar-page-container'>
   {sidebar && <Sidebar /> }
   <button className='menu-btn' onClick={()=>(setSidebar(!sidebar))} type='button'> {menuIcon} </button>
   <div className='cab-service-body-container'>
   <h1>CabService Page</h1>
   </div>

   </div>
  
  </div>
)
}

CabService.propTypes = {};

CabService.defaultProps = {};

export default CabService;
