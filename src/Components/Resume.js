import React from "react";
import { Container, Row, Col, Button, Tab, Nav } from "react-bootstrap";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
function Resume() {
    return (
        <>
            <section className="mt-5 mt-150" id="resume">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="main_heading text-center">
                                <h6 className="mb-0 text_color_gradint">2+ YEARS OF EXPERIENCE</h6>
                                <h1>My Resume</h1>
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
                    <Tab.Container id="left-tabs-example" defaultActiveKey="Education">
                        <Row>
                            <Col sm={12}>
                                <Nav variant="pills" className="tabs_resume mx-auto">
                                    <Nav.Item>
                                        <Nav.Link eventKey="Education"><i className="fa-solid fa-graduation-cap"></i> Education</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="Professional"><i className="fa-solid fa-gears"></i> Professional Skills</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="Experience"><i className="fa-solid fa-briefcase"></i> Experience</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={12} className="mt-5">
                                <Tab.Content>
                                    <Tab.Pane eventKey="Education">
                                        <Education />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Professional">
                                        <Skills />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Experience">
                                        <Experience />
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

export default Resume