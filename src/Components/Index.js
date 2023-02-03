import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import rubeel from "../assets/images/rubeel-2.png";
import Feature from "./Feature";
import Resume from "./Resume";
import Portofolio from "./Portofolio";
import Contact from "./Contact";

function Index() {

    return(
        <>
        <section className="d-flex align-items-center mt-50" id="home">
            <Container>
                <Row className="">
                    <Col lg={6} data-aos="fade-right">
                        <div className="home_content">
                            <h6 >WELCOME TO MY WORLD</h6>
                            <h1>Hi, I’m <span className="text_color_gradint">Rubeel Ahmad</span> a UI/UX Designer.</h1>
                            <p className="mt-4">I'm Creative UI/UX Designer from India working in web development and Graphics. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
                            <p>Interact and Share with Team Members and Collegues, and Develop World-Class Solution to Real World Challenges.</p>
                            <Button className="aboutme_btn mt-4">About Me</Button>
                        </div>
                    </Col>
                    <Col lg={6} className="main_shape mt-5 mt-xl-0 " data-aos="fade-up-left">
                        <div className="home_img d-flex align-items-center justify-content-between">
                           <img src={rubeel} className="w-100"/>
                           <div className="skills_all">
                           <h6>React js <span>70%</span></h6>
                                <ul className="list-unstyled d-flex">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li className="bg_grey"></li>
                                    <li className="bg_grey"></li>
                                    <li className="bg_grey"></li>
                                </ul>
                                <h6>Vue js <span>70%</span></h6>
                                <ul className="list-unstyled d-flex">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li className="bg_grey"></li>
                                    <li className="bg_grey"></li>
                                    <li className="bg_grey"></li>
                                </ul>
                                <h6>HTML <span>100%</span></h6>
                                <ul className="list-unstyled d-flex">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                                <h6>Css <span>95%</span></h6>
                                <ul className="list-unstyled d-flex">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li className="bg_grey"></li>
                                </ul>
                                <h6>Bootstrap <span>90%</span></h6>
                                <ul className="list-unstyled d-flex">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li className="bg_grey"></li>
                                </ul>
                                <h6>Javascript <span>50%</span></h6>
                                <ul className="list-unstyled d-flex">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li className="bg_grey"></li>
                                    <li className="bg_grey"></li>
                                    <li className="bg_grey"></li>
                                    <li className="bg_grey"></li>
                                    <li className="bg_grey"></li>
                                </ul>
                                <h6>Jquery<span>70%</span></h6>
                                <ul className="list-unstyled d-flex">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li className="bg_grey"></li>
                                    <li className="bg_grey"></li>
                                    <li className="bg_grey"></li>
                                </ul>
                                <h6>Wordpress<span>80%</span></h6>
                                <ul className="list-unstyled d-flex">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li className="bg_grey"></li>
                                    <li className="bg_grey"></li>
                                </ul>
                                <h6>Photoshop<span>70%</span></h6>
                                <ul className="list-unstyled d-flex">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li className="bg_grey"></li>
                                    <li className="bg_grey"></li>
                                    <li className="bg_grey"></li>
                                </ul>
                                <h6>Figma<span>50%</span></h6>
                                <ul className="list-unstyled d-flex">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li className="bg_grey"></li>
                                    <li className="bg_grey"></li>
                                    <li className="bg_grey"></li>
                                    <li className="bg_grey"></li>
                                    <li className="bg_grey"></li>
                                </ul>
                                <h6>Illustrator<span>40%</span></h6>
                                <ul className="list-unstyled d-flex">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li className="bg_grey"></li>
                                    <li className="bg_grey"></li>
                                    <li className="bg_grey"></li>
                                    <li className="bg_grey"></li>
                                    <li className="bg_grey"></li>
                                    <li className="bg_grey"></li>
                                </ul>
                           </div>
                           <div className="text_desing">
                            <h6>i can impossible design</h6>
                           </div>
                           <div className="social_media">
                            <ul className="d-flex list-unstyled m-0 p-0 justify-content-end">
                                <li><a href="https://www.facebook.com/rubeel.ahmad.35" target="blank"><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="https://www.instagram.com/rubeel_ahmad_321/" target="blank"><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href="https://twitter.com/Rubeel_Ahmad2" target="blank"><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/mohd-rubeel-6219b0228/" target="blank"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                <li><a href="https://in.pinterest.com/malikbhai9026/" target="blank"><i className="fa-brands fa-pinterest"></i></a></li>
                                <li><a href="https://www.youtube.com/channel/UCSaSFync_xreHpxd0X-zppg" target="blank"><i className="fa-brands fa-youtube"></i></a></li>
                            </ul>
                           </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <Feature />
        <Resume />
        <Portofolio />
        <Contact />

        </>
    )
}

export default Index;