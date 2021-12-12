import React from 'react';
import '../styles/Contact.css';
import ContactImage from '../assets/fooda.jpeg';

function Contact() {
    return (
        <div className="contact">
            <div className="leftSide" style={{ backgroundImage: `url(${ContactImage})` }}>
                leftSide
            </div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form id='contact-form' action="" method='POST'>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name='name' placeholder='Enter your Name' />
                    <label htmlFor="email">Email</label>
                    <input name='email' placeholder="Enter email address" type='email' />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" placeholder="Enter message" rows="6" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
