import React from 'react';
import './toolbar.css';
import logo from './logo.png';
import SideNav from './SideNav';
const Nav =props=>(
      <header className="toolbar">
      <nav className="toolber_Nav">
      <div className="sidenav_toolbar">
      <SideNav click={props.drawerClickHandler}/>
      </div>
      <div className="toolbar_logo"><img src={logo} alt="logo"/></div>
      <div className="toolbar_items">
      <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/">Club</a></li>
      <li><a href="/">Events</a></li>
      <li><a href="/">Contact Us</a></li>
      </ul>
      </div>
      </nav>
      </header>
    );
export default Nav;
