import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './header.css';
import Context from '../../services/Context/Context';
import {useNavigate } from 'react-router-dom'
import {HiLogout} from 'react-icons/hi'
import {BsPersonCircle} from 'react-icons/bs'
import {BsGear} from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import { Avatar } from 'primereact/avatar';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AiOutlineUser} from 'react-icons/ai';
import {RiHotelFill} from 'react-icons/ri'
import {AiOutlineCar ,AiOutlineSearch} from 'react-icons/ai';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {BsGrid} from 'react-icons/bs'
import { Button } from 'primereact/button';
import { icons } from 'react-icons';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import ToggleButton from "react-theme-toggle-button";
import "react-theme-toggle-button/dist/index.css";
import { InputText } from 'primereact/inputtext';
import { Menubar } from 'primereact/menubar';
import AdminDashboard from '../../components/AdminDashboard/AdminDashboard';
import BookingStatus from '../../components/BookingStatus/BookingStatus'
import {SlMenu} from 'react-icons/sl'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { color } from '@mui/system';





const Header = props =>{
  
  const showNav=true
 const navigate=useNavigate()


  

  const logoutHandler=()=>{
    localStorage.removeItem('token')
    navigate('/')

  }
  return(

  <Context.Consumer>
  {value=>{
    const {sidebar, changeSidebar, isDark, changeTheme}=value
   
 return(
  
  <div className={`header ${isDark&&"dark-header" }`}  data-testid="Header">  
     <div className={`header-container-new ${isDark&&"dark-header-container" }`}>
      <div className='container-new'>
      <Link   style={{ textDecoration: 'none' }} to='/admin-dashboard'><button  className={`admin-link ${isDark&&"dark-admin-link" }`} type='button'  data-bs-toggle="offcanvas" onClick={()=>{sidebar&&changeSidebar(false)}}> Booking Admin </button></Link>
<div className='search-container'>
<button className=" menu" type="button" data-bs-toggle="offcanvas"  data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" onClick={()=>changeSidebar(!sidebar)}><SlMenu className="menu-icon"/></button>
<div className="search-bar">
      <form className="search-form d-flex align-items-center">
        <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
        <button type="submit" title="Search"><i className="bi bi-search"></i></button>
      </form>
    </div>
    </div>

</div>

<div className='toogle-container'>
  {/* <div className='toogle-icon'>
<ToggleButton  isDark={isDark} onChange={() => changeTheme()} />
</div> */}
<Popup arrow={false} trigger={<button type='button' className='menu-bar'> <Avatar className='avatar' label="A"  size='xlarge' shape="circle"/></button>} position="center">
    <div className= {`menu-container ${isDark&&"dark-menu-container" }`}>
      <button type='button' className={isDark?"dark-menu-items":"menu-items" }><BsPersonCircle className='popup-icon'  />  Profile</button>
      <hr className='hrs' />
      <button type='button' className={isDark?"dark-menu-items":"menu-items" }><BsGear className='popup-icon' />  Settings</button>
      <hr className='hrs' />
      <button type='button' className={isDark?"dark-menu-items":"menu-items" } onClick={()=>[changeSidebar(false),logoutHandler()]}  ><HiLogout className='popup-icon' label='logout' />  Logout</button>

    </div>
  </Popup>

  </div>
     </div>
    <div className= {`offcanvas offcanvas-start    sidebar-offcanvas ${isDark&&"bg-dark" }`} data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
      {/* <div className="offcanvas-header">
    
      <img src='https://cdn-icons-png.flaticon.com/512/1014/1014131.png' alt='logo' className='logo-img'/>
                <button type="button" className={`btn-close ${isDark&&"bg-light" }`} data-bs-dismiss="offcanvas" aria-label="Close"   onClick={()=>changeSidebar(false)}></button>
      </div> */}

      <div className='sidebar-items-container'>
         <Link     to ='/admin-dashboard'  >  <button  className={`sidebar-link ${isDark&&"dark-sidebar-link" }`} type='button' data-bs-dismiss="offcanvas" aria-label="Close" onClick={()=>changeSidebar(false)  }><BsGrid className='sidebar-icons'/>Dashboard </button></Link>
          <Link     to ='/user'  >  <button  className={`sidebar-link ${isDark&&"dark-sidebar-link" }`} type='button' data-bs-dismiss="offcanvas" aria-label="Close" onClick={()=>changeSidebar(false)  }><AiOutlineUser className='sidebar-icons'/>User </button></Link>
          <Link  to='/cab-service' > <button  className={`sidebar-link ${isDark&&"dark-sidebar-link" }`} type='button' data-bs-dismiss="offcanvas" aria-label="Close" onClick={()=>changeSidebar(false)  }><AiOutlineCar className='sidebar-icons'/> Cab Service Clients </button></Link> 
          <Link  to  ='/e-commerce'> <button  className={`sidebar-link ${isDark&&"dark-sidebar-link" }`} type='button' data-bs-dismiss="offcanvas" aria-label="Close" onClick={()=>changeSidebar(false)  }> <AiOutlineShoppingCart className='sidebar-icons' /> E Commerce Clients </button></Link>  
          <Link     to ='/booking-status'><button  className={`sidebar-link ${isDark&&"dark-sidebar-link" }`} type='button' data-bs-dismiss="offcanvas" aria-label="Close" onClick={()=>changeSidebar(false)  }> <RiHotelFill  className='sidebar-icons'/> Hotels Booking  </button></Link>
          </div>
        
    </div> 
      
 </div>
 
);
 }
 }
 </Context.Consumer>
  )
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
