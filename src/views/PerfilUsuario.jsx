import { useContext, useState } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';
import { Container, ListGroup, Card, Button, Form, Row, Col } from "react-bootstrap";

const PerfilUsuario = () => {
  const { usuario, actualizarPerfil } = useContext(UsuarioContext);
  const [editando, setEditando] = useState(false);
  const [nuevosDatos, setNuevosDatos] = useState(usuario);

  const handleEditar = () => {
    setEditando(true);
  };

  const handleCancelar = () => {
    setNuevosDatos(usuario); // Resetea el formulario
    setEditando(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevosDatos({
      ...nuevosDatos,
      [name]: value
    });
  };

  const handleGuardar = () => {
    actualizarPerfil(nuevosDatos);
    setEditando(false);
  };

  return (
    <Container className="mt-4">
      <Row className="mb-4">
        <Col>
          <h1>Mi Perfil</h1>
        </Col>
        <Col className="text-end">
          {!editando ? (
            <Button 
              variant="primary" 
              onClick={handleEditar}
            >
              Editar Perfil
            </Button>
          ) : (
            <>
              <Button 
                variant="success" 
                onClick={handleGuardar}
                className="me-2"
              >
                Guardar Cambios
              </Button>
              <Button 
                variant="secondary" 
                onClick={handleCancelar}
              >
                Cancelar
              </Button>
            </>
          )}
        </Col>
      </Row>

      {!editando ? (
        // VISTA ESTÁTICA
        <Row>
          <Col xs={12} md={8}>
            <Card className="shadow-sm">
              <Card.Header className="bg-primary text-white">
                <Card.Title className="mb-0">Información del Perfil</Card.Title>
              </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <strong>Nombre:</strong> {usuario.nombre}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>DNI:</strong> {usuario.dni}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Rol:</strong> {usuario.rol}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Institución:</strong> {usuario.institucion}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        // VISTA EDITABLE (FORMULARIO)
        <Row>
          <Col xs={12} md={8}>
            <Card className="shadow-sm">
              <Card.Header className="bg-info text-white">
                <Card.Title className="mb-0">Editar Perfil</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="nombre"
                      value={nuevosDatos.nombre}
                      onChange={handleChange}
                      placeholder="Ingresa tu nombre"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control 
                      type="number" 
                      name="dni"
                      value={nuevosDatos.dni}
                      onChange={handleChange}
                      placeholder="Ingresa tu DNI"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Rol</Form.Label>
                    <Form.Select 
                      name="rol"
                      value={nuevosDatos.rol}
                      onChange={handleChange}
                    >
                      <option value="Alumno">Alumno</option>
                      <option value="Docente">Docente</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Institución</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="institucion"
                      value={nuevosDatos.institucion}
                      onChange={handleChange}
                      placeholder="Ingresa tu institución"
                    />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default PerfilUsuario;