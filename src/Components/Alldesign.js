import React from "react";
import { Container, Row, Col, Button, Tab, Nav } from "react-bootstrap";
import portfolio1 from "../assets/images/portfolio-1.jpg";
import portfolio2 from "../assets/images/portfolio-2.jpg";
import portfolio3 from "../assets/images/portfolio-3.jpg";
import portfolio7 from "../assets/images/7.jpg";
import portfolio11 from "../assets/images/11.jpg";
import portfolio6 from "../assets/images/6.jpg";
import portfolio12 from "../assets/images/12.jpg";
import portfolio13 from "../assets/images/13.jpg";
import portfolio14 from "../assets/images/14.jpg";


function Alldesign() {
    return (
        <>
            <section className="mb-5">
                <Container>
                    <Row>
                        <Col xl={4} md={6} className="mb-3">
                            <div className="portfolio_boxes services_boxes">
                                <img src={portfolio1} className="w-100" />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <div>
                                        <h6 className="text-white">Cogni Sap</h6>
                                        <p className="mb-0">Web Design</p>
                                    </div>
                                    <div>
                                        <Button href="https://cognisap.com/en" target="blank" className='aboutme_btn read_more_btn'>Read More</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} md={6} className="mb-3">
                            <div className="portfolio_boxes services_boxes">
                                <img src={portfolio2} className="w-100" />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <div>
                                        <h6 className="text-white">Dates & Honey</h6>
                                        <p className="mb-0">Web Design</p>
                                    </div>
                                    <div>
                                        <Button href="https://datesandhoney.app/" target="blank" className='aboutme_btn read_more_btn'>Read More</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} md={6} className="mb-3">
                            <div className="portfolio_boxes services_boxes">
                                <img src={portfolio3} className="w-100" />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <div>
                                        <h6 className="text-white">Book Your Own</h6>
                                        <p className="mb-0">Web Design</p>
                                    </div>
                                    <div>
                                        <Button href="#" target="blank" className='aboutme_btn read_more_btn'>Read More</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} md={6} className="mb-3">
                            <div className="portfolio_boxes services_boxes">
                                <img src={portfolio7} className="w-100" />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <div>
                                        <h6 className="text-white">Dale India</h6>
                                        <p className="mb-0">Banner</p>
                                    </div>
                                    <div>
                                        <Button href="#" target="blank" className='aboutme_btn read_more_btn'>Read More</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} md={6} className="mb-3">
                            <div className="portfolio_boxes services_boxes">
                                <img src={portfolio11} className="w-100" />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <div>
                                        <h6 className="text-white">Sundara Devi</h6>
                                        <p className="mb-0">Banner</p>
                                    </div>
                                    <div>
                                        <Button href="#" target="blank" className='aboutme_btn read_more_btn'>Read More</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} md={6} className="mb-3">
                            <div className="portfolio_boxes services_boxes">
                                <img src={portfolio6} className="w-100" />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <div>
                                        <h6 className="text-white">IDS Interior</h6>
                                        <p className="mb-0">Banner</p>
                                    </div>
                                    <div>
                                        <Button href="#" target="blank" className='aboutme_btn read_more_btn'>Read More</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} md={6} className="mb-3">
                            <div className="portfolio_boxes services_boxes">
                                <img src={portfolio12} className="w-100" />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <div>
                                        <h6 className="text-white">Subhash Chandra</h6>
                                        <p className="mb-0">Banner</p>
                                    </div>
                                    <div>
                                        <Button href="#" target="blank" className='aboutme_btn read_more_btn'>Read More</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} md={6} className="mb-3">
                            <div className="portfolio_boxes services_boxes">
                                <img src={portfolio13} className="w-100" />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <div>
                                        <h6 className="text-white">Durga Puja</h6>
                                        <p className="mb-0">Banner</p>
                                    </div>
                                    <div>
                                        <Button href="#" target="blank" className='aboutme_btn read_more_btn'>Read More</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} md={6} className="mb-3">
                            <div className="portfolio_boxes services_boxes">
                                <img src={portfolio14} className="w-100" />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <div>
                                        <h6 className="text-white">Ganesh Chaturthi</h6>
                                        <p className="mb-0">Banner</p>
                                    </div>
                                    <div>
                                        <Button href="#" target="blank" className='aboutme_btn read_more_btn'>Read More</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Alldesign;