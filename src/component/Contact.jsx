import React from 'react';
import Footer from './Footer';
import './contactus.css';



class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: ''
        }

    }
    handleNameChange = (e) => {
        this.setState({ name: e.target.value })
    }
    handlemailChange = (e) => {
        this.setState({ email: e.target.value })
    }
    handleMessageChange = (e) => {
        this.setState({ message: e.target.value })
    }
    handleSubmit = () => {
        alert(this.state.name);
        alert(this.state.message);
        alert(this.state.name)
    }
    render() {

        return ( < > < section className = "contact" > <
            div className = "container" >
            <
            div className = "content" >
            <
            h3 > CONTACT US < /h3> <
            h5 > Send your Feedback or Querries to us! < /h5>

            <
            /div>  <
            div className = "contactInfo" >
            <
            div className = "box" >
            <
            div className = "icon" > < i className = "fa fa-map" > < /i></div >
            <
            div className = "text" >
            <
            h3 > ADDRESS < /h3> <
            h5 > Campus - 1, 19 th KM Stone, NH 24, Ghaziabad, Uttar Pradesh 201009 < /h5> < /
            div > <
            /div> <
            div className = "box" >
            <
            div className = "icon" > < i className = "fa fa-envelope" > < /i></div >
            <
            div className = "text" >
            <
            h3 > EMAIL ADDRESS < /h3> <
            h5 > abes @xyz.com < /h5> < /
            div > <
            /div> <
            div className = "box" >
            <
            div className = "icon" > < i className = "fa fa-phone-square" > < /i></div >
            <
            div className = "text" >
            <
            h3 > CONTACT NUMBER < /h3> <
            h5 > 0123456789 < /h5> < /
            div > <
            /div> < /
            div > < /
            div > <
            div className = "contactForm" >
            <
            div id = "sendmessage"
            style = {
                { display: "none" }
            } > Your message has been sent.Thank you! < /div> <
            form method = "post"
            action = "contact.html"
            className = "contactForm2"
            onSubmit = { this.handleSubmit } >
            <
            h2 > Send Message < /h2> <
            div className = "inputBox" >
            <
            input type = "text"
            name = "name"
            id = "name"
            value = { this.state.name }
            onChange = { this.handleNameChange }
            required = "required" / >
            <
            span > Full Name < /span> < /
            div > <
            div className = "inputBox" >
            <
            input type = "email"
            id = "email"
            name = "email"
            value = { this.state.email }
            onChange = { this.handlemailChange }
            required = "required" / >
            <
            span > Email < /span> < /
            div > <
            div className = "inputBox" >
            <
            textarea id = "message"
            value = { this.message }
            onChange = { this.handleMessageChange }
            required = "required" / >
            <
            span > Type Your Message.... < /span> < /
            div > <
            div className = "inputBox" >
            <
            input type = "submit"
            name = "send"
            value = "Send" / >
            <
            /div>

            <
            /form> < /
            div >



            <
            /
            section >
            <
            footer > < Footer / > < /footer></ >
        );
    }
}
export default Contact;