import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, NavDropdown, Container, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import { RiShoppingBag3Line } from 'react-icons/ri';



const MiNavBar = (cart) => {

  // const { cart } = useContext(CartCtxt)

  return (
    <>
      <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/Brand">
          <Navbar.Brand>Mi Ecommerce</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="">
              <Nav.Link>Inicio</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Películas">
              <LinkContainer to="/Populares">
                <NavDropdown.Item>Populares</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/Recientes">
                <NavDropdown.Item>Recientes</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/Recientes">
                <NavDropdown.Item>Mejores puntuadas</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
          <Nav>
          <LinkContainer to="/login">
            <Nav.Link>Iniciar Sesión</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/register">
            <Nav.Link>Registrarse</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/Cart">
            <Nav.Link> <RiShoppingBag3Line /> 
            {cart.length ? cart.length : null}
            </Nav.Link>

          </LinkContainer>


        </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </>
  )
}

export default MiNavBar;

