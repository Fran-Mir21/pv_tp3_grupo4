import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar bg="info" variant="dark" expand="lg" sticky="top">
      <Container>
        <Nav className="mx-auto">
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