import React from "react";
import { Container, Row, Col, Button, Tab, Nav } from "react-bootstrap";

function Skills() {
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="education_skills_boxes">
                                <p className="mb-2 year_text text_color_gradint">Features</p>
                                <h2>Design Skills</h2>
                                <div className="progress-charts mb-4 mt-4">
                                    <h6 className="d-flex justify-content-between">PHOTOSHOP <span>100%</span></h6>
                                    <div className="progress">
                                        <div className="progress-bar w-100"></div>
                                    </div>
                                </div>
                                <div className="progress-charts mb-4">
                                    <h6 className="d-flex justify-content-between">ILLUSTRATOR <span>75%</span></h6>
                                    <div className="progress">
                                        <div className="progress-bar w-75"></div>
                                    </div>
                                </div>
                                <div className="progress-charts mb-4">
                                    <h6 className="d-flex justify-content-between">FIGMA <span>50%</span></h6>
                                    <div className="progress">
                                        <div className="progress-bar w-50"></div>
                                    </div>
                                </div>
                                <div className="progress-charts mb-4">
                                    <h6 className="d-flex justify-content-between">CANVA <span>75%</span></h6>
                                    <div className="progress">
                                        <div className="progress-bar w-75"></div>
                                    </div>
                                </div>
                                <div className="progress-charts mb-4">
                                    <h6 className="d-flex justify-content-between">VIDEO EDITING <span>25%</span></h6>
                                    <div className="progress">
                                        <div className="progress-bar w-25"></div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="education_skills_boxes">
                                <p className="mb-2 year_text text_color_gradint">Features</p>
                                <h2>Development Skill</h2>
                                <div className="progress-charts mb-4 mt-4">
                                    <h6 className="d-flex justify-content-between">REACT JS <span>75%</span></h6>
                                    <div className="progress">
                                        <div className="progress-bar w-75"></div>
                                    </div>
                                </div>
                                <div className="progress-charts mb-4">
                                    <h6 className="d-flex justify-content-between">VUE JS <span>50%</span></h6>
                                    <div className="progress">
                                        <div className="progress-bar w-50"></div>
                                    </div>
                                </div>
                                <div className="progress-charts mb-4">
                                    <h6 className="d-flex justify-content-between">HTML <span>100%</span></h6>
                                    <div className="progress">
                                        <div className="progress-bar w-100"></div>
                                    </div>
                                </div>
                                <div className="progress-charts mb-4">
                                    <h6 className="d-flex justify-content-between">CSS <span>95%</span></h6>
                                    <div className="progress">
                                        <div className="progress-bar w-95"></div>
                                    </div>
                                </div>
                                <div className="progress-charts mb-4">
                                    <h6 className="d-flex justify-content-between">BOOTSTRAP <span>75%</span></h6>
                                    <div className="progress">
                                        <div className="progress-bar w-75"></div>
                                    </div>
                                </div>
                                <div className="progress-charts mb-4">
                                    <h6 className="d-flex justify-content-between">JAVASCRIPT <span>50%</span></h6>
                                    <div className="progress">
                                        <div className="progress-bar w-50"></div>
                                    </div>
                                </div>
                                <div className="progress-charts mb-4">
                                    <h6 className="d-flex justify-content-between">JQUERY <span>75%</span></h6>
                                    <div className="progress">
                                        <div className="progress-bar w-75"></div>
                                    </div>
                                </div>
                                <div className="progress-charts mb-4">
                                    <h6 className="d-flex justify-content-between">WORDPRESS <span>50%</span></h6>
                                    <div className="progress">
                                        <div className="progress-bar w-50"></div>
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

export default Skills;