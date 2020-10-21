import React from 'react';
import './toolbar.css';
import logo from './logo.jpeg';
import SideNav from './sidenav/SideNav';
import { Link } from 'react-router-dom';

const Nav = props => ( <
    header className = "toolbar" >
    <
    nav className = "toolber_Nav" >
    <
    div className = "sidenav_toolbar" >
    <
    SideNav click = { props.drawerClickHandler }
    /> < /
    div > <
    div className = "toolbar_logo" > < Link to = '/' >
    <
    img src = { logo }
    alt = "logo" / > < /Link>< /div > <
    div className = "toolbar_items" >
    <
    ul >
    <
    li > < Link to = '/'
    style = {
        { textDecoration: "none" }
    } > Home < /Link>< /li > <
    li > < Link to = "/"
    style = {
        { textDecoration: "none" }
    } > Club < /Link > < /li > <
    li > < Link to = "/events"
    style = {
        { textDecoration: "none" }
    } > Events < /Link></li >
    <
    li > < Link to = "/contact"
    style = {
        { textDecoration: "none" }
    } > ContactUs < /Link></li >
    <
    /ul> < /
    div > <
    /nav> < /
    header >
);
export default Nav;