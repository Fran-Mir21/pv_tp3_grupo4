import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Gestión de Proyectos</Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/dashboard">
            Inicio
          </Nav.Link>

          <Nav.Link as={NavLink} to="/proyectos">
            Proyectos
          </Nav.Link>

          <Nav.Link as={NavLink} to="/perfil">
            Perfil
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Menu;