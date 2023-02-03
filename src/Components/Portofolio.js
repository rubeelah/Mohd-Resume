import React from "react";
import { Container, Row, Col, Button, Tab, Nav } from "react-bootstrap";
import Alldesign from "./Alldesign";
import Designgraphics from "./Designgraphics";
import Webdesign from "./Webdesign";

function Portofolio (){
    return(
        <>
          <section className="mt-5" id="portofolio" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="main_heading text-center">
                            <h6 className="mb-0 text_color_gradint">VISIT MY PORTFOLIO</h6>
                            <h1>My Portfolio</h1>
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
                    <Tab.Container id="left-tabs-example" defaultActiveKey="all-design">
                        <Row>
                            <Col sm={12} data-aos="fade-down-right">
                                <Nav variant="pills" className="tabs_resume mx-auto">
                                    <Nav.Item>
                                        <Nav.Link eventKey="all-design"> All</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="Web-Design"> Web Design</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="Graphics-Design">Graphics Design</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={12} className="mt-5">
                                <Tab.Content>
                                    <Tab.Pane eventKey="all-design">
                                        <Alldesign  />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Web-Design">
                                        <Webdesign />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Graphics-Design">
                                        <Designgraphics />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </section>
        </>
    )
}

export default Portofolio;