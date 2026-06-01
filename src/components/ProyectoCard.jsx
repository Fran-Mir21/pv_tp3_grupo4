import { Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProyectoCard = ({ proyecto, onEliminar }) => {
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
          <Link to={`/proyectos/${id}`} className="btn btn-primary me-2">
            Ver Detalle
          </Link>

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