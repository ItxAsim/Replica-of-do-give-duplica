import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <ul>
                        <li>About Give</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Fundraiser Support</h3>
                    <ul>
                        <li>FAQs</li>
                        <li>Reach out</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Start a Fundraiser for Donate to</h3>
                    <ul>
                        <li>NGO</li>
                        <li>Social Causes</li>
                        <li>NGOs</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <div className="currency-selector">
                        <select>
                            <option value="INR">INR(₹)</option>
                            <option value="USD">USD($)</option>
                    
                        </select>
                    </div>
                    <div className="social-icons">
                        {/* Replace # with the actual links to social media profiles */}
                        <a href="#" className="icon">Facebook</a>
                        <a href="#" className="icon">Twitter</a>
                        <a href="#" className="icon">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="footer-disclaimer">
                <h4>Disclaimer</h4>
                <p>Use of children's information including images, videos, testimonials, etc. in the Campaign is necessary for creating awareness about the charitable cause in order to bring traction to the said charitable cause and obtain donations which can then be used for charitable activities. Information is used and processed with valid consent. This statement is issued in compliance with the Consumer Protection Act, 2019, as amended from time to time.</p>
            </div>
            <div className="footer-bottom">
                <p>© Give</p>
                <div className="footer-links">
                    <a href="#">Terms</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
