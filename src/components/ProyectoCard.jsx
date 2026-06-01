import { Card, Button, Badge } from "react-bootstrap";

const ProyectoCard = ({ proyecto, onEliminar, onVerDetalle }) => {
  const { id, titulo, categoria, estado } = proyecto;

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>

        <Card.Text>
          <strong>Categoría:</strong> {categoria}
        </Card.Text>

        <Badge bg={estado === "Finalizado" ? "success" : "warning"}>
          {estado}
        </Badge>

        <div className="mt-3">
          <Button
            variant="primary"
            className="me-2"
            onClick={() => onVerDetalle(proyecto)}
          >
            Ver Detalle
          </Button>

          <Button
            variant="danger"
            onClick={() => onEliminar(id)}
          >
            Eliminar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProyectoCard;