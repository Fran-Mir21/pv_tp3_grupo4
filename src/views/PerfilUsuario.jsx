import { Container, ListGroup, Card, Row, Col } from "react-bootstrap";

const PerfilUsuario = () => {
  const miembros = [
    {
      nombre: "Eugenia Arias",
      rol: "Alumna",
      institucion: "FI UNJu",
    },
    {
      nombre: "Miranda Martinez Francisco Ariel",
      rol: "Alumno",
      institucion: "FI UNJu",
    },
    {
      nombre: "Tarraga Emanuel Gonzalo",
      rol: "Alumno",
      institucion: "FI UNJu",
    },
    {
      nombre: "Valdiviezo Natalia Shaiel",
      rol: "Alumna",
      institucion: "FI UNJu",
    },
  ];

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Perfil de Equipo</h1>
      
      <Row className="g-3">
        {miembros.map((miembro, index) => (
          <Col xs={12} md={6} lg={6} key={index}>
            <Card className="shadow-sm h-100">
              <Card.Header className="bg-primary text-white">
                <Card.Title className="mb-0">{miembro.nombre}</Card.Title>
              </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <strong>Rol:</strong> {miembro.rol}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Institución:</strong> {miembro.institucion}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PerfilUsuario;