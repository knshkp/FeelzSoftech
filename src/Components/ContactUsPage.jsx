import React from 'react';
import './ContactUsPage.css'; // Import CSS file for styling

const ContactUsPage = () => {
    return (
        <div className="contact-us-page" id='contacts'>
            <div className="contact-info">
                <h1>Contact Us</h1>
                <div className="info-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <p>Pratap Nagar, Jaipur, Rajasthan</p>
                </div>
                <div className="info-item">
                    <i className="fas fa-phone"></i>
                    <p>+91 9166033002</p>
                </div>
                <div className="info-item">
                    <i className="fas fa-envelope"></i>
                    <p>info@feelzsoftech.com</p>
                </div>
            </div>
            <div className="contact-form">
                <h2>Get in Touch</h2>
                <form>
                    <input type="text" placeholder="Your Name" className="input-field" />
                    <input type="email" placeholder="Your Email" className="input-field" />
                    <textarea placeholder="Your Message" className="input-field textarea-field"></textarea>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
            <div className="footer">
                <p>&copy; 2024 Feelz Softech. All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default ContactUsPage;
