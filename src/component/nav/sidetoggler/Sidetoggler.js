import React from 'react';
import './sideToggler.css';
import { Link } from 'react-router-dom';
const SideDrawer = props => {
    let drawerClasses = 'sideDrawer';
    if (props.show) {
        drawerClasses = 'sideDrawer open';
    }
    return ( <
        nav className = { drawerClasses } >
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
        li > < Link to = "/"
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
        nav >
    );
};
export default SideDrawer;