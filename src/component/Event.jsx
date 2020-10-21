import React from 'react';
import Eventcomponent from './Eventcomponent.jsx';
import './event.css';

class Event extends React.Component {


    render() {

        return ( < > < div className = "levent" > < div className = "Head" > < h4 > Live Events < /h4> < /div > < div className = 'tevent' >
            <
            Eventcomponent / >
            <
            /
            div > <
            /div >  <
            hr / >
            <
            div className = "levent" > < div className = "Head" > < h4 > Upcoming Events < /h4> < /div > < div className = 'tevent' >
            <
            Eventcomponent / >
            <
            /
            div > <
            /div > < div className="footer"  style={{position:"fixed"}}> <
            p > Eventor { '\u00A9' }
            2020 Copyright.ABES ENGINEERING COLLEGE < /p ></div >
            <
            / >
        );
    }
}
export default Event;