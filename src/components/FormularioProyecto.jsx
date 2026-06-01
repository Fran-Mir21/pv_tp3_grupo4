import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const FormularioProyecto = ({ onAgregarProyecto }) => {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [estado, setEstado] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [recursos, setRecursos] = useState("");
  const [equipo, setEquipo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoProyecto = {
      id: Date.now(),
      titulo,
      categoria,
      estado,
      descripcion,
      recursos: recursos.split(","),
      equipo: [
        {
          nombre: equipo.split("-")[0] || "",
          rol: equipo.split("-")[1] || "",
        },
      ],
    };

    onAgregarProyecto(nuevoProyecto);

    setTitulo("");
    setCategoria("");
    setEstado("");
    setDescripcion("");
    setRecursos("");
    setEquipo("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Título</Form.Label>
        <Form.Control
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Categoría</Form.Label>
        <Form.Control
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Estado</Form.Label>
        <Form.Select
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        >
          <option value="">Seleccionar estado</option>
          <option value="En proceso">En proceso</option>
          <option value="Pendiente">Pendiente</option>
          <option value="Finalizado">Finalizado</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Recursos</Form.Label>
        <Form.Control
          type="text"
          placeholder="Separados por coma"
          value={recursos}
          onChange={(e) => setRecursos(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Equipo</Form.Label>
        <Form.Control
          type="text"
          placeholder="nombre-rol"
          value={equipo}
          onChange={(e) => setEquipo(e.target.value)}
        />
      </Form.Group>

      <Button variant="success" type="submit">
        Agregar Proyecto
      </Button>
    </Form>
  );
};

export default FormularioProyecto;