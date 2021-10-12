import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, NavDropdown, Container, Nav} from 'react-bootstrap';
import ShopCart from './ShopCart';
import {Link, NavLink} from 'react-router-dom'

const MiNavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Mi Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Películas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Populares</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Recientes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mejores puntuadas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Nav.Link href="#Login">Iniciar Sesión</Nav.Link>
          <Nav.Link eventKey={2} href="#Registro">
            Registrarse
          </Nav.Link>
          <ShopCart />

        </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </>
  )
}

export default MiNavBar;

