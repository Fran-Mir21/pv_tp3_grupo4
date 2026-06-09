import { Container, Row, Col, Card } from "react-bootstrap";
import proyectoService from "../services/proyectoService";

const Dashboard = () => {
  const proyectos = proyectoService.obtenerProyectos();
  const resumen = proyectos.reduce(
    (acumulador, proyecto) => {
      acumulador.total += 1;
      acumulador[proyecto.estado] = (acumulador[proyecto.estado] || 0) + 1;
      return acumulador;
    },
    {
      total: 0,
      "En proceso": 0,
      Finalizado: 0,
      Pendiente: 0,
    }
  );

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
              <h2 className="text-primary">{resumen.total}</h2>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6}>
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>Proyectos en Curso</Card.Title>
              <h2 className="text-warning">{resumen["En proceso"]}</h2>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6}>
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>Proyectos Finalizados</Card.Title>
              <h2 className="text-success">{resumen.Finalizado}</h2>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6}>
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>Proyectos Pendientes</Card.Title>
              <h2 className="text-secondary">{resumen.Pendiente}</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;