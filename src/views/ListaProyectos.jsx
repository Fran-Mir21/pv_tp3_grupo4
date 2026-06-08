import { useEffect, useMemo, useRef, useState } from "react";
import proyectoService from "../services/proyectoService";
import ProyectoCard from "../components/ProyectoCard";
import RegistroActividad from "../components/RegistroActividad";
import FormularioProyecto from "../components/FormularioProyecto";
import { Container, Row, Col, Form } from "react-bootstrap";

const ListaProyectos = () => {

    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos()
    );
    const [ultimaActualizacion, setUltimaActualizacion] = useState("");
    const proyectosIniciales = useRef(proyectos.length);
    const [busqueda, setBusqueda] = useState("");

    const proyectosFiltrados = useMemo(() => {
        if (!busqueda) return proyectos;
        return proyectos.filter((p) =>
            p.titulo.toLowerCase().includes(busqueda.toLowerCase())
        );
    }, [proyectos, busqueda]);

    useEffect(() => {
        // Control estricto: si la cantidad actual de proyectos es igual a la del inicio,
        // significa que la página recién se monta o se usó el filtro. Frenamos aquí.
        if (proyectos.length === proyectosIniciales.current) {
            return;
        }

        const ahora = new Date();

        const fechaFormateada =
            `${ahora.getDate().toString().padStart(2, "0")}/` +
            `${(ahora.getMonth() + 1).toString().padStart(2, "0")}/` +
            `${ahora.getFullYear()} a las ` +
            `${ahora.getHours().toString().padStart(2, "0")}:` +
            `${ahora.getMinutes().toString().padStart(2, "0")} hs.`;

        setUltimaActualizacion(
            `Última actualización de la lista: ${fechaFormateada}`
        );

    }, [proyectos]);

   const handleEliminar = (id) => {
        proyectoService.eliminarProyecto(id);
        const nuevosProyectos = proyectoService.obtenerProyectos();
        proyectosIniciales.current = nuevosProyectos.length; // Sincroniza la referencia
        setProyectos(nuevosProyectos);
    };

    const handleBuscar = (e) => {
        const texto = e.target.value;
        setBusqueda(texto);
    };

    const handleAgregarProyecto = (nuevoProyecto) => {
        proyectoService.agregarProyecto(nuevoProyecto);
        const nuevosProyectos = proyectoService.obtenerProyectos();
        proyectosIniciales.current = nuevosProyectos.length; // Sincroniza la referencia
        setProyectos(nuevosProyectos);
    };
    return (
  <Container className="mt-4">
    <h2 className="mb-4">
  Gestión de Proyectos Educativos
</h2>

    <FormularioProyecto
      onAgregarProyecto={handleAgregarProyecto}
    />

    <Form.Control
      type="text"
      placeholder="Buscar proyecto..."
      value={busqueda}
      onChange={handleBuscar}
      className="my-4"
    />

    <Row>
      {proyectosFiltrados.map((p) => (
        <Col
          key={p.id}
          xs={12}
          md={6}
          lg={4}
          className="mb-3"
        >
          <ProyectoCard
            proyecto={p}
            onEliminar={handleEliminar}
          />
        </Col>
      ))}
    </Row>

    {ultimaActualizacion && (
      <RegistroActividad fecha={ultimaActualizacion} />
    )}
  </Container>
);
};

export default ListaProyectos;