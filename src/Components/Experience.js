import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Education() {
    return (
        <>
            <section className="mb-5">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="education_skills_boxes">
                                <p className="mb-2 year_text text_color_gradint">2021 - 2023</p>
                                <h2>Job Experience</h2>
                                <div className="experience-list">
                                    <div className="resume-single-list">
                                        <i className="fa-solid fa-user-graduate text_color_gradint"></i>
                                        <h3>Jamtech Technologies Pvt Ltd</h3>
                                        <p className="mb">Experience <span className="text_color_gradint f-w-600">(7 Month)</span></p>
                                        <p className="mb-0 text_taraining">Web Designer, Front-Developer, Garaphics Designer, UI/UX Designer</p>
                                    </div>
                                </div>
                                <div className="experience-list">
                                    <div className="resume-single-list">
                                        <i className="fa-solid fa-user-graduate text_color_gradint"></i>
                                        <h3>Wingo Soft Technologies Pvt Ltd</h3>
                                        <p className="mb">Experience <span className="text_color_gradint f-w-600">(1 Year)</span></p>
                                        <p className="mb-0 text_taraining">Web Designer, Front-Developer, Garaphics Designer, UI/UX Designer</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className="mt-5 mt-md-0">
                            <div className="education_skills_boxes">
                                <p className="mb-2 year_text text_color_gradint">2019 - 2020</p>
                                <h2>Trainer Experience</h2>
                                <div className="experience-list">
                                    <div className="resume-single-list">
                                        <i className="fa-solid fa-user-graduate text_color_gradint"></i>
                                        <h3>Softgen Technologies</h3>
                                        <p className="mb">Experience <span className="text_color_gradint f-w-600">(6 Month)</span></p>
                                        <p className="mb-0 text_taraining">Web Designer, Front-Developer, Garaphics Designer, UI/UX Designer</p>
                                    </div>
                                </div>
                                <div className="experience-list">
                                    <div className="resume-single-list">
                                        <i className="fa-solid fa-user-graduate text_color_gradint"></i>
                                        <h3>Sibad.com</h3>
                                        <p className="mb">Training <span className="text_color_gradint f-w-600">(1 Year)</span></p>
                                        <p className="mb-0 text_taraining">Training UI/UX Designer</p>
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
export default Education;