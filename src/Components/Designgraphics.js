import React from "react";
import { Container, Row, Col, Button, Tab, Nav } from "react-bootstrap";
import portfolio1 from "../assets/images/1.jpg";
import portfolio2 from "../assets/images/2.jpg";
import portfolio3 from "../assets/images/3.jpg";
import portfolio4 from "../assets/images/11.jpg";
import portfolio5 from "../assets/images/5.jpg";
import portfolio6 from "../assets/images/6.jpg";
import portfolio7 from "../assets/images/7.jpg";
import portfolio8 from "../assets/images/8.jpg";
import portfolio9 from "../assets/images/9.jpg";


function Designgraphics() {
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
                                        <h6 className="text-white">Jivya</h6>
                                        <p className="mb-0">Banner</p>
                                    </div>
                                    <div>
                                        <Button className='aboutme_btn read_more_btn'>Read More</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} md={6} className="mb-3">
                            <div className="portfolio_boxes services_boxes">
                                <img src={portfolio2} className="w-100" />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <div>
                                        <h6 className="text-white">SBD Marwada</h6>
                                        <p className="mb-0">Banner</p>
                                    </div>
                                    <div>
                                        <Button className='aboutme_btn read_more_btn'>Read More</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} md={6} className="mb-3">
                            <div className="portfolio_boxes services_boxes">
                                <img src={portfolio3} className="w-100" />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <div>
                                        <h6 className="text-white">Vidhya PS</h6>
                                        <p className="mb-0">Banner</p>
                                    </div>
                                    <div>
                                        <Button className='aboutme_btn read_more_btn'>Read More</Button>
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
                                        <Button className='aboutme_btn read_more_btn'>Read More</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} md={6} className="mb-3">
                            <div className="portfolio_boxes services_boxes">
                                <img src={portfolio5} className="w-100" />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <div>
                                        <h6 className="text-white">IDS Interior</h6>
                                        <p className="mb-0">Banner</p>
                                    </div>
                                    <div>
                                        <Button className='aboutme_btn read_more_btn'>Read More</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} md={6} className="mb-3">
                            <div className="portfolio_boxes services_boxes">
                                <img src={portfolio8} className="w-100" />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <div>
                                        <h6 className="text-white">Eid Mubarak</h6>
                                        <p className="mb-0">Banner</p>
                                    </div>
                                    <div>
                                        <Button className='aboutme_btn read_more_btn'>Read More</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} md={6} className="mb-3">
                            <div className="portfolio_boxes services_boxes">
                                <img src={portfolio9} className="w-100" />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <div>
                                        <h6 className="text-white">Aqualus</h6>
                                        <p className="mb-0">Banner</p>
                                    </div>
                                    <div>
                                        <Button className='aboutme_btn read_more_btn'>Read More</Button>
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
                                        <Button className='aboutme_btn read_more_btn'>Read More</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} md={6} className="mb-3">
                            <div className="portfolio_boxes services_boxes">
                                <img src={portfolio4} className="w-100" />
                                <div className="d-flex mt-3 justify-content-between align-items-center">
                                    <div>
                                        <h6 className="text-white">Sundara Devi</h6>
                                        <p className="mb-0">Banner</p>
                                    </div>
                                    <div>
                                        <Button className='aboutme_btn read_more_btn'>Read More</Button>
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

export default Designgraphics;