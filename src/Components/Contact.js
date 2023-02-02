import React from "react";
import { Container, Row, Col, Button, Form, Label, } from "react-bootstrap";

function Contact() {
    return (
        <>
            <section className="mt-5" id="contact">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="main_heading text-center">
                                <h6 className="mb-0 text_color_gradint">CONTACT</h6>
                                <h1>Contact Me</h1>
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


            <section className="mt-5 mb-5">
                <Container>
                    <Row>
                        <Col lg={4} className="">
                            <div className="">
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
                                <div className="main_text-about text-center mt-3">
                                    <ul className="d-flex list-unstyled m-0 p-0 gap-3 justify-content-center mt-4">
                                        <li><a href="https://www.facebook.com/rubeel.ahmad.35" target="blank"><i className="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href="https://www.instagram.com/rubeel_ahmad_321/" target="blank"><i className="fa-brands fa-instagram"></i></a></li>
                                        <li><a href="https://twitter.com/Rubeel_Ahmad2" target="blank"><i className="fa-brands fa-twitter"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/mohd-rubeel-6219b0228/" target="blank"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                        <li><a href="https://in.pinterest.com/malikbhai9026/" target="blank"><i className="fa-brands fa-pinterest"></i></a></li>
                                    </ul>
                                </div>
                                <Button href="tel:9026915319" className="aboutme_btn mt-4 btn btn-primary mx-auto d-block"><i className="fa-solid fa-phone"></i> Contact Me</Button>
                            </div>
                        </Col>
                        <Col lg={1}></Col>

                        <Col lg={7} className="mt-5 mt-xl-0">
                            <div className="contact_main_boxes">
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Name <span className="text_color_gradint">*</span></Form.Label>
                                        <Form.Control type="name" placeholder="Enter Your Name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Email <span className="text_color_gradint">*</span></Form.Label>
                                        <Form.Control type="email" placeholder="Enter Your Email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Number <span className="text_color_gradint">*</span></Form.Label>
                                        <Form.Control type="email" placeholder="Enter Your Number" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Number <span className="text_color_gradint">*</span></Form.Label>
                                        <Form.Control as="textarea" style={{ height: '100px' }}  placeholder="Enter Your Number" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit" className="aboutme_btn mt-5 mx-auto d-block">
                                    <i className="fa-regular fa-paper-plane"></i> Send Message
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Contact;