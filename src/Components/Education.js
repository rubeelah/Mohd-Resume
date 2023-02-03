import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Education() {
    return (
        <>
            <section className="mb-5">
                <Container>
                    <Row>
                        <Col md={6} data-aos="fade-right">
                            <div className="education_skills_boxes">
                                <p className="mb-2 year_text text_color_gradint">2022 - 2023</p>
                                <h2>Education Quality</h2>
                                <div className="experience-list">
                                    <div className="resume-single-list">
                                        <i className="fa-solid fa-user-graduate text_color_gradint"></i>
                                        <h3>Danda Tek Degree College</h3>
                                        <p className="mb">Degree College <span className="text_color_gradint f-w-600">(2006 - 2010)</span></p>
                                        <p className="mb-0 text_taraining">B.Com With Computer Application (Pursuing).</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className="mt-5 mt-md-0" data-aos="fade-left">
                            <div className="education_skills_boxes">
                                <p className="mb-2 year_text text_color_gradint">2020 - 2021</p>
                                <h2>Education Quality</h2>
                                <div className="experience-list">
                                    <div className="resume-single-list">
                                        <i className="fa-solid fa-user-graduate text_color_gradint"></i>
                                        <h3>Adarsh Kailash Nath</h3>
                                        <p className="mb">Inter College <span className="text_color_gradint f-w-600">(2006 - 2010)</span></p>
                                        <p className="mb-0 text_taraining">Higher Secondary Examination From UP Board</p>
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