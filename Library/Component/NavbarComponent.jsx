
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-dark">
    <Container>
      <Navbar.Brand className='text-white' href="#home">Faketrinelli</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto ">
          <Nav.Link className='text-white' href="#home">Home</Nav.Link>
          <Nav.Link className='text-white' href="#link">About and Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default BasicExample;