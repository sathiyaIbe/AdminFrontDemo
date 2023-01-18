import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './AdminDashboard.css';
import {useNavigate } from 'react-router-dom'
import Header from '../../core/header/header';
import Sidebar from '../../core/Sidebar/Sidebar';
import { AiOutlineMenu } from 'react-icons/ai'
import {RxCross1} from 'react-icons/rx'







const AdminDashboard = () => {
  const [sidebar, setSidebar]=useState(true)



  const navigate=useNavigate()

  const logoutHandler=()=>{
    localStorage.removeItem('token')
    navigate('/')
  }

const menuIcon= sidebar ?  <RxCross1 className='cancel-icon'/> :<AiOutlineMenu className='menu-icon'/>

  return(
  <div className="AdminDashboard" data-testid="AdminDashboard">
    <Header />
    
 
    <div className='card-container'>
    <div className='sidebar-page-container'>
    {sidebar && <Sidebar/>}
   </div>

   <button className='menu-btn' onClick={()=>(setSidebar(!sidebar))} type='button'> {menuIcon} </button>

    <div className='admin-dashboard-body-container'>
    <h1 className='admin-dashboard-heading'>Admin Dashboard</h1>
    </div>
  
   
    </div>
    
  </div>
)};

AdminDashboard.propTypes = {};

AdminDashboard.defaultProps = {};

export default AdminDashboard;
