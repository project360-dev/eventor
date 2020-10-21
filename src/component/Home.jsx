import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer';

import a from './4.jpg';
import aa from './2.jpg';
import aaa from './3.jpg';


import './home.css';
class Home extends React.Component {
    render() {
        return ( < div > < div >
            <
            Carousel >
            <
            Carousel.Item >
            <
            img className = "d-block w-100"
            src = { a }
            alt = "First slide" /
            >
            <
            /Carousel.Item> <
            Carousel.Item >
            <
            img className = "d-block w-100"
            src = { aa }
            alt = "2nd slide" /
            >

            <
            /Carousel.Item> <
            Carousel.Item >
            <
            img className = "d-block w-100"
            src = { aaa }
            alt = "Third slide" /
            >

            <
            /Carousel.Item> < /
            Carousel > < /div>

            <
            div className = "detailf" >
            <
            div className = "About" >
            <
            div className = "Abouts" >
            <
            h4 >
            ABOUT <
            /h4> <
            p >
            Eventor CODE WANTS TO BE SIMPLE is an initiative to help the upcoming programmers with the code.Eventor focuses on providing the most efficient code or snippets as the code wants to be simple.We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.

            <
            /p> < /
            div > <
            /div>

            <
            div className = "categories" >
            <
            div className = "category" >
            <
            h4 > CATEGORIES < /h4> <
            a href = "" > C < /a><br/ >
            <
            a href = "" > C++ < /a><br/ > < a href = "" > Java < /a><br/ > < a href = "" > UI Design < /a><br/ > < a href = "" > Android < /a><br/ > < a href = "" > Templates < /a><br/ >

            <
            /div> < /
            div > <
            div className = "quick" >
            <
            div className = "quikl" >
            <
            h4 > QUICKLINKS < /h4> <
            a href = "" > contactUs < /a><br/ >
            <
            a href = "" > AboutUs < /a><br/ > < a href = "" > Contribute < /a><br/ > < a href = "" > Privacy Policy < /a><br/ > < a href = "" > Sitemap < /a><br/ >

            <
            /div> < /
            div >




            <
            /div> <
            hr / >

            <
            Footer / >
            <
            /div >
        );
    }
}
export default Home;