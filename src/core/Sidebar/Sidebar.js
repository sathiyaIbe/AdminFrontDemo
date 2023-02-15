import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="sidebar-container" data-testid="Sidebar">
    <div className='sidebar-items-container'>
      <h1>Logo</h1>
      <Link className='sidebar-link  ' to ='/user'>User</Link>
      <Link className='sidebar-link ' to ='/cab-service'>Cab Service Clients</Link> 
      <Link className='sidebar-link ' to ='/e-commerce'>E Commerce Clients</Link>  
      <Link className='sidebar-link  ' to ='/booking-status'>Booking Status</Link>
      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-menu-button-wide"></i><span>Components</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="components-alerts.html">
              <i class="bi bi-circle"></i><span>Alerts</span>
            </a>
          </li>
          <li>
            <a href="components-accordion.html">
              <i class="bi bi-circle"></i><span>Accordion</span>
            </a>
          </li>
          
        </ul>
      </li>


      </div>
        </div>
);

Sidebar.propTypes = {};

Sidebar.defaultProps = {};

export default Sidebar;
