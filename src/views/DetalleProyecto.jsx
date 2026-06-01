import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Button, ListGroup, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import proyectoService from "../services/proyectoService";

const DetalleProyecto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [proyecto, setProyecto] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Obtener el proyecto desde el servicio usando el id de la URL
    const proyectos = proyectoService.obtenerProyectos();
    const proyectoEncontrado = proyectos.find((p) => p.id === parseInt(id));
    
    if (proyectoEncontrado) {
      setProyecto(proyectoEncontrado);
      setError(false);
    } else {
      setError(true);
    }
  }, [id]);

  if (error) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">
          Proyecto no encontrado. El ID proporcionado no existe.
        </Alert>
        <Button variant="primary" onClick={() => navigate("/proyectos")}>
          Volver a la Lista de Proyectos
        </Button>
      </Container>
    );
  }

  if (!proyecto) {
    return (
      <Container className="mt-4">
        <p>Cargando...</p>
      </Container>
    );
  }

  const {
    titulo,
    categoria,
    estado,
    descripcion = "Sin descripción",
    recursos = [],
    equipo = [],
  } = proyecto;

  return (
    <Container className="mt-4">
      <Button 
        variant="secondary" 
        className="mb-3"
        onClick={() => navigate("/proyectos")}
      >
        ← Volver a la Lista
      </Button>

      <Card className="shadow-sm">
        <Card.Header className="bg-primary text-white">
          <Card.Title className="mb-0">{titulo}</Card.Title>
        </Card.Header>
        
        <Card.Body>
          <Card.Text>{descripcion}</Card.Text>

          <ListGroup className="mb-3">
            <ListGroup.Item>
              <strong>Categoría:</strong> {categoria}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Estado:</strong> {estado}
            </ListGroup.Item>
          </ListGroup>

          <h5>Recursos</h5>
          <ListGroup className="mb-3">
            {recursos.length > 0 ? (
              recursos.map((r, index) => (
                <ListGroup.Item key={index}>{r}</ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item>Sin recursos registrados</ListGroup.Item>
            )}
          </ListGroup>

          <h5>Equipo</h5>
          <ListGroup className="mb-3">
            {equipo.length > 0 ? (
              equipo.map((persona, index) => (
                <ListGroup.Item key={index}>
                  {persona.nombre} - <strong>{persona.rol}</strong>
                </ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item>Sin equipo registrado</ListGroup.Item>
            )}
          </ListGroup>
        </Card.Body>

        <Card.Footer className="text-muted">
          <Button 
            variant="primary"
            onClick={() => navigate("/proyectos")}
          >
            Volver a la Lista de Proyectos
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default DetalleProyecto;
