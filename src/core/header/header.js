import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './header.css';
import {useNavigate } from 'react-router-dom'
import {HiLogout} from 'react-icons/hi'
import {BsPersonCircle} from 'react-icons/bs'
import {BsGear} from 'react-icons/bs'
import { Avatar } from 'primereact/avatar';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { icons } from 'react-icons';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';







const Header = () =>{
  const navigate=useNavigate()

  

  const logoutHandler=()=>{
    localStorage.removeItem('token')
    navigate('/')

  }
 
 return(
  <div className="header" data-testid="Header">
    <div className='header-container'>
      <Link style={{textDecoration: 'none', color:"#485240"} } to='/admin-dashboard'><h1>Admin Dashboard</h1></Link>
      <Popup trigger={<button type='button' className='menu-bar'> <Avatar className='avatar' label="A"  size='xlarge' shape="circle"/></button>} position="bottom right">
    <div className='menu-container'>
      <button type='button' className='logout-btn'><BsPersonCircle  />  Profile</button>
      <button type='button' className='logout-btn'><BsGear  />  Settings</button>
      <button type='button' className='logout-btn' onClick={logoutHandler}><HiLogout label='logout' />  Logout</button>

    </div>
  </Popup>
                    
                  
                  
     
    </div>
  </div>
);
 }
Header.propTypes = {};

Header.defaultProps = {};

export default Header;
