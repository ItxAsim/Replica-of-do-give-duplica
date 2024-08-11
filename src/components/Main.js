import React from 'react';
import { Container, Row, Col, Card, Carousel, ProgressBar } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';
import './CirclePercentageBar.css';
import { FaUserFriends, FaClock } from 'react-icons/fa'
import './Banner.css';
import { BsExclamationTriangle } from "react-icons/bs";
import LogoBlinker from './LogoBlinker';
import FundraiserSection from './FundraiserSection';

const Main = () => {
    const [isHovered, setIsHovered] = useState(false);
    const percentage = 40;
    const percentage2 = 50;
    const percentage3 = 70;

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const circumference = 2 * Math.PI * 45; // 45 is the radius of the circle
    const dashArray = `${(circumference * percentage) / 100} ${circumference}`;
    const dashArray2 = `${(circumference * percentage2) / 100} ${circumference}`;
    const dashArray3 = `${(circumference * percentage3) / 100} ${circumference}`;

    return (
        <main className="main">
            <Container fluid className="hero bg-light text-center py-5">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://assets.website-files.com/5ffe284686ce8a08a6a6ff5a/639909a9756e3cb343df4c46_paybee-fundraising-strategies-post.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First Slide</h3>
                            <p>Description for the first slide.</p>
                            <button style={buttonStyles}>Donate now</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://makeseoroadmap.com/blogs/blog-images/seo-works-for-business.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second Slide</h3>
                            <p>Description for the second slide.</p>
                            <button style={buttonStyles}>Donate now</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src='https://th.bing.com/th/id/OIP.7-deMgj1H_Q7g1H2YIcFqgHaF7?w=1350&h=1080&rs=1&pid=ImgDetMain'
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third Slide</h3>
                            <p>Description for the third slide.</p>
                            <button style={buttonStyles}>Donate now</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src='https://th.bing.com/th/id/OIP.eZExwl0mTOVWvLniEqDIFwHaEK?w=1280&h=720&rs=1&pid=ImgDetMain'
                            alt="Fourth slide"
                        />
                        <Carousel.Caption>
                            <h3>Fourth Slide</h3>
                            <p>Description for the fourth slide.</p>
                            <button style={buttonStyles}>Donate now</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src='https://th.bing.com/th/id/OIP.wT2qph4xCeTvMkBXwp_yXAHaE8?w=600&h=400&rs=1&pid=ImgDetMain'
                            alt="Fifth slide"
                        />
                        <Carousel.Caption>
                            <h3>Fifth Slide</h3>
                            <p>Description for the fifth slide.</p>
                            <button style={buttonStyles}>Donate now</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
            <center>
                <Container className='detail'>
                    <h1>Give Monthly</h1>
                    <p color='#0000FF'>Sign up once and invest in India’s future every month</p>
                </Container>
            </center>
            <Container className='cont' style={{ borderTop: '1px solid', borderBottom: '1px solid' }}>
                <Row className='row'>
                    <Col style={{ padding: '20px' }} >
                        <h4><FaCheckCircle style={{ color: 'blue' }} />Real Change</h4>
                        <p color='#0000FF'>Your choice to give monthly will make a long-lasting impact</p>
                    </Col>
                    <Col style={{ borderLeft: '1px solid', borderRight: '1px solid' }} >

                        <h4><FaCheckCircle style={{ color: 'blue' }} />Regular updates</h4>
                        <p color='#0000FF'>Learn how you are changing lives through our reports</p>

                    </Col>

                    <Col>
                        <h4><FaCheckCircle style={{ color: 'blue' }} />Trusted giving</h4>
                        <p color='#0000FF'> Every beneficiary you support is under the care of GiveAssured nonprofits </p>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className='mt-5'>
                    <Col md={4} className="mb-4">
                        <Card className="h-100">
                            <div className="position-relative">
                                <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.s4o7vqJi3WZu_R0YzmSWhwAAAA?rs=1&pid=ImgDetMain" />
                                <div className="card-img-overlay d-flex align-items-end justify-content-start">
                                    <h4 className="card-title text-white text-bold">Mission every girl in school</h4>
                                </div>
                            </div>
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Container>
                                    <Row>
                                        <Col><div
                                            className="circle-bar-container"
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <svg className="circle-bar-svg">
                                                <circle
                                                    className="circle-bg"
                                                    cx="50%"
                                                    cy="50%"
                                                    r="45"
                                                    fill="none"
                                                    strokeWidth="10"
                                                    width='20px'
                                                />
                                                <circle
                                                    className="circle-fill"
                                                    cx="50%"
                                                    cy="50%"
                                                    r="45"
                                                    width='20px'
                                                    fill="none"
                                                    strokeDasharray={dashArray}
                                                    strokeWidth="10"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                            <div className="percentage-text">{percentage}%</div>
                                            {isHovered && (
                                                <button className="red-button">Donate Now</button>
                                            )}

                                        </div>
                                        </Col>
                                        <Col>
                                            <span color='red'>575</span><span> childeren are slected out of 1200  </span>
                                            <FaUserFriends size={22} color="gray" /> <span color='grey'>supporters 122</span>


                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100">
                            <div className="position-relative">
                                <Card.Img variant="top" src="https://th.bing.com/th/id/R.21a88bc1eec2e6ff60d338a3c1ec3bec?rik=12mjRore14pOGQ&pid=ImgRaw&r=0" />
                                <div className="card-img-overlay d-flex align-items-end justify-content-start">
                                    <h4 className="card-title text-white text-bold">No Child Orphand</h4>
                                </div>
                            </div>
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Container>
                                    <Row>
                                        <Col><div
                                            className="circle-bar-container"
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <svg className="circle-bar-svg">
                                                <circle
                                                    className="circle-bg"
                                                    cx="50%"
                                                    cy="50%"
                                                    r="45"
                                                    fill="none"
                                                    strokeWidth="10"
                                                    width='20px'
                                                />
                                                <circle
                                                    className="circle-fill"
                                                    cx="50%"
                                                    cy="50%"
                                                    r="45"
                                                    width='20px'
                                                    fill="none"
                                                    strokeDasharray={dashArray3}
                                                    strokeWidth="10"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                            <div className="percentage-text">{percentage3}%</div>
                                            {isHovered && (
                                                <button className="red-button">Donate Now</button>
                                            )}

                                        </div>
                                        </Col>
                                        <Col>
                                            <span color='red'>575</span><span> childeren are slected out of 1200  </span>
                                            <FaUserFriends size={22} color="gray" /> <span color='grey'>supporters 145</span>


                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} className="mb-4">
                        <Card className="h-100">
                            <div className="position-relative">
                                <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/poor-old-man-feeling-sad-sitting-stone-sidewalk-near-entrance-bucharest-city-metro-photo-taken-august-79069515.jpg" />
                                <div className="card-img-overlay d-flex align-items-end justify-content-start">
                                    <h4 className="card-title text-white text-bold">Mission to Protect Abdoned elders</h4>
                                </div>
                            </div>
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Container>
                                    <Row>
                                        <Col><div
                                            className="circle-bar-container"
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <svg className="circle-bar-svg">
                                                <circle
                                                    className="circle-bg"
                                                    cx="50%"
                                                    cy="50%"
                                                    r="45"
                                                    fill="none"
                                                    strokeWidth="10"
                                                    width='20px'
                                                />
                                                <circle
                                                    className="circle-fill"
                                                    cx="50%"
                                                    cy="50%"
                                                    r="45"
                                                    width='20px'
                                                    fill="none"
                                                    strokeDasharray={dashArray2}
                                                    strokeWidth="10"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                            <div className="percentage-text">{percentage2}%</div>
                                            {isHovered && (
                                                <button className="red-button">Donate Now</button>
                                            )}

                                        </div>
                                        </Col>
                                        <Col>
                                            <span color='red'>575</span><span> childeren are slected out of 1200  </span>
                                            <FaUserFriends size={22} color="gray" /> <span color='grey'>supporters 122</span>


                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="banner" style={{ padding: '20px' }}>
                            Asim donated $40
                            Sarah donated $25.
                            John donated $50.
                            Maria donated $30.
                            Ahmed donated $45.
                            Emily donated $35.
                            David donated $60.
                            Aisha donated $20.
                            Michael donated $55.
                            Fatima donated $40.
                        </div>
                    </div>
                </div>
            </div>
            <Container> <h2>Support a fundraiser</h2>
                <p color='blue'>Pick a cause close to your heart and donate now</p></Container>

            <Container>
                <Row className="mt-5">
                    <Col md={4} className="mb-4">
                        <Card className="h-100">
                            <div className="position-relative">
                                <Card.Img
                                    variant="top"
                                    src='https://th.bing.com/th/id/OIP.Copd8EyRwbBWJNTyRoc5ywHaE8?rs=1&pid=ImgDetMain'
                                />

                            </div>
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                    <span color='blue'>by Activist Social integration</span>
                                </Card.Text>
                                <Container>

                                    <FaUserFriends /> <span color="blue" style={{ marginRight: '60px' }}> supporters 122</span> <FaClock /><span>9 days left</span>

                                    <Col>
                                        <div
                                            className="progress-bar-container"
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}

                                        >
                                            <ProgressBar now={75} label={`${percentage}%`} />
                                            {isHovered && (
                                                <button className="red-button mt-2">Donate Now</button>
                                            )}
                                        </div>
                                    </Col>
                                    <Col>
                                        <span> $20000 </span>
                                        <span color="blue" style={{ marginLeft: "75px" }}> Raised of 10000$ goal</span>
                                    </Col>

                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} className="mb-4">
                        <Card className="h-100">
                            <div className="position-relative">
                                <Card.Img
                                    variant="top"
                                    src='https://th.bing.com/th/id/OIP.Copd8EyRwbBWJNTyRoc5ywHaE8?rs=1&pid=ImgDetMain'
                                />

                            </div>
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                    <span color='blue'>by Activist Social integration</span>
                                </Card.Text>
                                <Container>

                                    <FaUserFriends /> <span color="blue" style={{ marginRight: '60px' }}> supporters 122</span> <FaClock /><span>9 days left</span>

                                    <Col>
                                        <div
                                            className="progress-bar-container"
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}

                                        >
                                            <ProgressBar now={75} label={`${percentage}%`} />
                                            {isHovered && (
                                                <button className="red-button mt-2">Donate Now</button>
                                            )}
                                        </div>
                                    </Col>
                                    <Col>
                                        <span> $20000 </span>
                                        <span color="blue" style={{ marginLeft: "75px" }}> Raised of 10000$ goal</span>
                                        <BsExclamationTriangle color='red' /><span color='red'>  Urgent need of funds</span>
                                    </Col>
                       
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} className="mb-4">
                        <Card className="h-100">
                            <div className="position-relative">
                                <Card.Img
                                    variant="top"
                                    src='https://th.bing.com/th/id/OIP.Copd8EyRwbBWJNTyRoc5ywHaE8?rs=1&pid=ImgDetMain'
                                />

                            </div>
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                    <span color='blue'>by Activist Social integration</span>
                                </Card.Text>
                                <Container>

                                    <FaUserFriends /> <span color="blue" style={{ marginRight: '60px' }}> supporters 122</span> <FaClock /><span>9 days left</span>

                                    <Col>
                                        <div
                                            className="progress-bar-container"
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}

                                        >
                                            <ProgressBar now={75} label={`${percentage}%`} />
                                            {isHovered && (
                                                <button className="red-button mt-2">Donate Now</button>
                                            )}
                                        </div>
                                    </Col>
                                    <Col>
                                        <span> $20000 </span>
                                        <span color="blue" style={{ marginLeft: "75px" }}> Raised of 10000$ goal</span>
                                        
                                    </Col>

                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
         <Container>
            <h2>Our trusted NGO partners</h2>
            <p color='blue' style={{fontSize:"25px"}}>We have been raising funds for credible nonprofits for 20+ years</p>
         </Container>
         <LogoBlinker/>
         <br></br>
         <br></br>
         <FundraiserSection />
         <br></br>
         <Container>
         <center>
            <h3 color='red' style={{fontWeight:'bolder', fontSize:"30px"}}>give</h3>
            <h2>India’s most trusted online donation platform</h2>
            <Container style={{padding:'50px '}}>
            <Card>
                <Row>
                    <Col>
                <Card.Text color="black" style={{fontSize:"50px",fontWeight:"bolder"}}>2.7M+</Card.Text>
                <Card.Subtitle color='blue'>Donors</Card.Subtitle>
                </Col>
                <Col>
                <Card.Text color="black" style={{fontSize:"50px",fontWeight:"bolder"}}>15M+</Card.Text>
                <Card.Subtitle color='blue'>Lives Impacted</Card.Subtitle>
                </Col>
                <Col>
                <Card.Text color="black" style={{fontSize:"50px",fontWeight:"bolder"}}>3000+</Card.Text>
                <Card.Subtitle color='blue'>Verified Non Profits</Card.Subtitle>
                </Col>
                <Col>
                <Card.Text color="black" style={{fontSize:"50px",fontWeight:"bolder"}}>300+</Card.Text>
                <Card.Subtitle color='blue'>Corporate Partners</Card.Subtitle>
                </Col>
                </Row>
            </Card>
            </Container>
         </center>
         </Container>
         <Container><span  color='red'> give</span>
         <span> in the News</span>
         </Container>
         <Container>
            <h2>Our trusted Corporate partners</h2>
            <p color='blue' style={{fontSize:"25px"}}>Trusted by the largest brands and corporations, and the most impactful foundations around the world</p>
         </Container>
         <LogoBlinker/>
         <br></br>
         
           
        </main>
    );
};

// Inline styles for the button
const buttonStyles = {
    backgroundColor: '#e91e63', /* Red color */
    border: 'none',
    padding: '10px 20px',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
};

export default Main;