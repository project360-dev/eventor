import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './home.css';
class Home extends React.Component {
    render() {
        return ( < div style = {
                {}
            } >
            <
            Carousel >
            <
            Carousel.Item >
            <
            img className = "d-block w-100"
            src = "https://picsum.photos/id/1/200/300"
            alt = "First slide" /
            >
            <
            /Carousel.Item> <
            Carousel.Item >
            <
            img className = "d-block w-100"
            src = "https://picsum.photos/id/870/200/300?grayscale&blur=2"
            alt = "2nd slide" /
            >

            <
            /Carousel.Item> <
            Carousel.Item >
            <
            img className = "d-block w-100"
            src = "holder.js/800x400?text=Third slide&bg=20232a"
            alt = "Third slide" /
            >

            <
            /Carousel.Item> < /
            Carousel >
            <
            /div >
        );
    }
}
export default Home;