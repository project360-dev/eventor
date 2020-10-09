import React from 'react';
import './sideToggler.css';
const SideDrawer =props=>{
  let drawerClasses='sideDrawer';
  if (props.show){
    drawerClasses='sideDrawer open';
  }
return(
  <nav className={drawerClasses}>
  <ul>
  <li><a href='/'>Home</a></li>
  <li><a href='/'>Clubs</a></li>
  <li><a href='/'>Events</a></li>
  <li><a href='/'>Contact Us</a></li>
  </ul>
  </nav>
);
};
export default SideDrawer;
