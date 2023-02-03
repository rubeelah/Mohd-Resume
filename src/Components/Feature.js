import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import rubeel from "../assets/images/rubeel-2.png";
import img1 from "../assets/images/icon.svg";
import img2 from "../assets/images/icon1.svg";
import img3 from "../assets/images/icon3.svg";
import img4 from "../assets/images/icon4.svg";
import img5 from "../assets/images/icon5.svg";
import img6 from "../assets/images/icon2.svg";

function Feature(){
    return(
        <>
        <section className="mt-150" id="feature" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="main_heading text-center">
                            <h6 className="mb-0 text_color_gradint">FEATURES</h6>
                            <h1>What I Do</h1>
                            <ul className="list-unstyled d-flex m-0 p-0 justify-content-center">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="mt-5">
            <Container>
                <Row>
                    <Col lg={4} className="mt-150" data-aos="fade-up"
     data-aos-duration="1000">
                        <div className="about-me_detail">
                            <img src={rubeel} className="w-75" />
                            <div className="main_text-about text-center mt-3">
                               <h3>Rubeel Ahmad</h3>
                               <div className="skills_me">UI/UX Designer</div>
                               <ul className="d-flex list-unstyled m-0 p-0 gap-3 justify-content-center mt-4">
                                   <li><a href="https://www.facebook.com/rubeel.ahmad.35" target="blank"><i className="fa-brands fa-facebook-f"></i></a></li>
                                   <li><a href="https://www.instagram.com/rubeel_ahmad_321/" target="blank"><i className="fa-brands fa-instagram"></i></a></li>
                                   <li><a href="https://twitter.com/Rubeel_Ahmad2"  target="blank"><i className="fa-brands fa-twitter"></i></a></li>
                                   <li><a href="https://www.linkedin.com/in/mohd-rubeel-6219b0228/"  target="blank"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                   <li><a href="https://in.pinterest.com/malikbhai9026/" target="blank"><i className="fa-brands fa-pinterest"></i></a></li>
                                  </ul>
                            </div>
                            <div className="aboutme_content mt-4">
                                <div className="d-flex align-items-center gap-3 pb-2 mb-2">
                                    <div className="aboutme_content_icon">
                                        <i className="fa-solid fa-mobile-screen-button"></i>
                                    </div>
                                    <div className="about_heading_content">
                                        <p className="mb-0">Phone</p>
                                        <h6 className="mb-0">91-9026915319</h6>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3 pb-2 mb-2">
                                    <div className="aboutme_content_icon">
                                        <i className="fa-solid fa-envelope-open-text"></i>
                                    </div>
                                    <div className="about_heading_content">
                                        <p className="mb-0">Email</p>
                                        <h6 className="mb-0">mailkbhai9026@gmail.com</h6>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3 pb-2 mb-2">
                                    <div className="aboutme_content_icon">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div className="about_heading_content">
                                        <p className="mb-0">Location</p>
                                        <h6 className="mb-0">Faizulla Ganj Lucknow U.P</h6>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3 pb-2 mb-2 border-0">
                                    <div className="aboutme_content_icon">
                                       <i className="fa-solid fa-cake-candles"></i>
                                    </div>
                                    <div className="about_heading_content">
                                        <p className="mb-0">Birthday</p>
                                        <h6 className="mb-0">March 11, 1998</h6>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="aboutme_btn mt-4 btn btn-primary mx-auto d-block"><i className="fa-solid fa-cloud-arrow-down"></i> Download CV</button>
                        </div>
                    </Col>
                    <Col lg={8} className="mt-5 mt-xl-0">
                        <Row>
                            <Col sm={6} className="mt-3" data-aos="fade-up" data-aos-duration="2000">
                                <div className="services_boxes">
                                    <div className="servies_img">
                                      <img src={img1} />
                                    </div>
                                    <div className="services_content mt-4">
                                        <h5 className="text-white mb-3">Ui/Ux Design</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6} className="mt-3" data-aos="fade-up" data-aos-duration="3000">
                                <div className="services_boxes">
                                    <div className="servies_img">
                                      <img src={img2} />
                                    </div>
                                    <div className="services_content mt-4">
                                        <h5 className="text-white mb-3">App Development</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6} className="mt-3" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                                <div className="services_boxes">
                                    <div className="servies_img">
                                      <img src={img3} />
                                    </div>
                                    <div className="services_content mt-4">
                                        <h5 className="text-white mb-3">Photography</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6} className="mt-3" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000">
                                <div className="services_boxes">
                                    <div className="servies_img">
                                      <img src={img6} />
                                    </div>
                                    <div className="services_content mt-4">
                                        <h5 className="text-white mb-3">Graphics</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6} className="mt-3" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                <div className="services_boxes">
                                    <div className="servies_img">
                                      <img src={img4} />
                                    </div>
                                    <div className="services_content mt-4">
                                        <h5 className="text-white mb-3">Managment</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6} className="mt-3" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                <div className="services_boxes">
                                    <div className="servies_img">
                                      <img src={img5} />
                                    </div>
                                    <div className="services_content mt-4">
                                        <h5 className="text-white mb-3">Web Development</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}

export default Feature;