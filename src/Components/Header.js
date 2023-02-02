import { Button, Container, Navbar, Nav } from 'react-bootstrap';
import logo from "../assets/images/logo.png"

function Header() {
  return (
    <Navbar bg="tranparent" expand="lg" className="main_header">
      <Container>
        <Navbar.Brand href="#home" className='text_color_gradint logo'><img src={logo} /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 justify-content-end main_navbar">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#feature">Features</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="#portofolio">Portofolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Button href='#resume' className='aboutme_btn'>Resume</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;