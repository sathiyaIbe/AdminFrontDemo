import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="sidebar-container" data-testid="Sidebar">
    <div className='sidebar-items-container'>

    
      <Link className='sidebar-link ' to ='/cab-service'>Cab Service Clients</Link> 

      
      <Link className='sidebar-link ' to ='/e-commerce'>E Commerce Clients</Link> 

     
      <Link className='sidebar-link  ' to ='/booking-status'>Booking Status</Link>

      </div>
        </div>
);

Sidebar.propTypes = {};

Sidebar.defaultProps = {};

export default Sidebar;
