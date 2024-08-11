import React from 'react';
import './FundraiserSection.css';
import { Container } from 'react-bootstrap';

const FundraiserSection = () => {
    return (
        
        <div className="fundraiser-section">
            <Container>
            <div className="content">
                <h2>Raise funds for your cause!</h2>
                <p>Onboard on Give.do and create impact by raising funds for your initiatives</p>
                <div className="buttons">
                    <button className="enroll-btn">Enroll your NGO on Give.do</button>
                    <button className="raise-funds-btn">Raise funds for a listed NGO</button>
                </div>
            </div>
            
            </Container>
            <div className="images">
                <img src="https://www.cry.org/wp-content/uploads/children-are-powerful-agents-of-change.jpg" alt="Children playing" className="image-1" />
                <img src="https://fundsforngosmedia.s3.amazonaws.com/wp-content/uploads/2022/11/28074439/india-1.jpg" alt="Children studying" className="image-2" />
            </div>
        </div>
    );
};

export default FundraiserSection;
