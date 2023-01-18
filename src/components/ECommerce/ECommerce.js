import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ECommerce.css';
import Sidebar from '../../core/Sidebar/Sidebar';
import Header from '../../core/header/header';
import { AiOutlineMenu } from 'react-icons/ai'
import {RxCross1} from 'react-icons/rx'

const ECommerce = () =>{
  const [sidebar, setSidebar]=useState(false)

  const menuIcon= sidebar ?  <RxCross1 className='cancel-icon'/> :<AiOutlineMenu className='menu-icon'/>

  return (
  <div className="ECommerce" data-testid="ECommerce">
   <Header />

   <div className='sidebar-page-container'>
  {sidebar && <Sidebar /> }
   <button className='menu-btn' onClick={()=>(setSidebar(!sidebar))} type='button'> {menuIcon} </button>  
   <div className='e-commerce-body-container'>
   <h1>ECommerce Page</h1>
   </div>
   </div>
   
  </div>
);
  }

ECommerce.propTypes = {};

ECommerce.defaultProps = {};

export default ECommerce;
