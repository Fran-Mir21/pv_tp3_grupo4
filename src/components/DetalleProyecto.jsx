import { Card, Button, ListGroup } from "react-bootstrap";

const DetalleProyecto = ({ proyecto, onVolver }) => {
  if (!proyecto) {
    return null;
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
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>

        <Card.Text>{descripcion}</Card.Text>

        <Card.Text>
          Categoría: {categoria}
        </Card.Text>

        <Card.Text>
          Estado: {estado}
        </Card.Text>

        <h4>Recursos</h4>

        <ListGroup className="mb-3">
          {recursos.map((r, index) => (
            <ListGroup.Item key={index}>
              {r}
            </ListGroup.Item>
          ))}
        </ListGroup>

        <h4>Equipo</h4>

        <ListGroup className="mb-3">
          {equipo.map((persona, index) => (
            <ListGroup.Item key={index}>
              {persona.nombre} - {persona.rol}
            </ListGroup.Item>
          ))}
        </ListGroup>

        <Button
          variant="secondary"
          onClick={onVolver}
        >
          Volver
        </Button>
      </Card.Body>
    </Card>
  );
};

export default DetalleProyecto;