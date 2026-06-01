import { Container, Row, Col, Card } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container className="mt-4">
      <h1 className="mb-4">Dashboard</h1>
      <p className="lead">
        Bienvenido al sistema de gestión de proyectos educativos.
      </p>

      <Row className="g-4">
        <Col xs={12} md={6}>
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>Total de Proyectos</Card.Title>
              <h2 className="text-primary">12</h2>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6}>
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>Proyectos en Curso</Card.Title>
              <h2 className="text-warning">5</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;