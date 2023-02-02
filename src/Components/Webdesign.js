import React from "react";
import { Container, Row, Col, Button, Tab, Nav } from "react-bootstrap";
import portfolio1 from "../assets/images/portfolio-1.jpg";
import portfolio2 from "../assets/images/portfolio-2.jpg";
import portfolio3 from "../assets/images/portfolio-3.jpg";
import portfolio4 from "../assets/images/portfolio-4.jpg";
import portfolio5 from "../assets/images/portfolio-5.jpg";
import portfolio6 from "../assets/images/portfolio-6.jpg";


function Webdesign() {
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
                                        <Button href="https://www.bookyourown.net/" target="blank" className='aboutme_btn read_more_btn'>Read More</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} md={6} className="mb-3">
                            <div className="portfolio_boxes services_boxes">
                                <img src={portfolio4} className="w-100" />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <div>
                                        <h6 className="text-white">Ta Mastoria</h6>
                                        <p className="mb-0">Web Design</p>
                                    </div>
                                    <div>
                                        <Button href="https://tamastoria.gr/" target="blank" className='aboutme_btn read_more_btn'>Read More</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} md={6} className="mb-3">
                            <div className="portfolio_boxes services_boxes">
                                <img src={portfolio5} className="w-100" />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <div>
                                        <h6 className="text-white">Yes My</h6>
                                        <p className="mb-0">Web Design</p>
                                    </div>
                                    <div>
                                        <Button href="https://www.yes.my/" target="blank" className='aboutme_btn read_more_btn'>Read More</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} md={6} className="mb-3">
                            <div className="portfolio_boxes services_boxes">
                                <img src={portfolio6} className="w-100" />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <div>
                                        <h6 className="text-white">Total Protection</h6>
                                        <p className="mb-0">Web Design</p>
                                    </div>
                                    <div>
                                        <Button href="https://totalprotectionfilms.com/" target="blank" className='aboutme_btn read_more_btn'>Read More</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} md={6} className="mb-3">
                            <div className="portfolio_boxes services_boxes">
                                <img src={portfolio3} className="w-100" />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <div>
                                        <h6 className="text-white">Outer Banks Roofing</h6>
                                        <p className="mb-0">Web Design</p>
                                    </div>
                                    <div>
                                        <Button href="https://outerbanksroofingcompanies.com/" target="blank" className='aboutme_btn read_more_btn'>Read More</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} md={6} className="mb-3">
                            <div className="portfolio_boxes services_boxes">
                                <img src={portfolio2} className="w-100" />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <div>
                                        <h6 className="text-white">The Sorenson</h6>
                                        <p className="mb-0">Web Design</p>
                                    </div>
                                    <div>
                                        <Button href="https://sorensonlaw.net/" target="blank" className='aboutme_btn read_more_btn'>Read More</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} md={6} className="mb-3">
                            <div className="portfolio_boxes services_boxes">
                                <img src={portfolio1} className="w-100" />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <div>
                                        <h6 className="text-white">Hanooot</h6>
                                        <p className="mb-0">Web Design</p>
                                    </div>
                                    <div>
                                        <Button href="https://hanooot.com/" target="blank" className='aboutme_btn read_more_btn'>Read More</Button>
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

export default Webdesign;