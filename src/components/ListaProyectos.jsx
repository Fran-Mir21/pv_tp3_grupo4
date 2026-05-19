import { useState } from "react";
import proyectoService from "../services/proyectoService";
import ProyectoCard from "./ProyectoCard";
import DetalleProyecto from "./DetalleProyecto";
const ListaProyectos = () => {

    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos()
    );

    const [busqueda, setBusqueda] = useState("");
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

    const [titulo, setTitulo] = useState("");
const [categoria, setCategoria] = useState("");
const [estado, setEstado] = useState("");

    const handleEliminar = (id) => {
        proyectoService.eliminarProyecto(id);
        setProyectos(proyectoService.obtenerProyectos());
    };

    const handleBuscar = (e) => {
        const texto = e.target.value;
        setBusqueda(texto);

        if (texto === "") {
            setProyectos(proyectoService.obtenerProyectos());
        } else {
            setProyectos(proyectoService.buscarProyecto(texto));
        }
    };
const handleAgregar = () => {

    const nuevoProyecto = {
    id: Date.now(),
    titulo: titulo,
    categoria: categoria,
    estado: estado,
    descripcion: "Sin descripción",
    recursos: [],
    equipo: []
};

    proyectoService.agregarProyecto(nuevoProyecto);

    setProyectos(
        proyectoService.obtenerProyectos()
    );

    setTitulo("");
    setCategoria("");
    setEstado("");
};
    if (proyectoSeleccionado) {

        return (

            <DetalleProyecto

                proyecto={
                    proyectoSeleccionado
                }

                onVolver={() =>
                    setProyectoSeleccionado(null)
                }

            />

        );
    }
    return (
        <div className="container">
            <h2>Gestión de Proyectos Educativos</h2>
<div className="form-agregar">

    <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
    />

    <input
        type="text"
        placeholder="Categoría"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
    />

<select
    value={estado}
    onChange={(e) => setEstado(e.target.value)}
>

    <option value="">
        Seleccionar estado
    </option>

    <option value="En curso">
        En proceso
    </option>

    <option value="Pendiente">
        Pendiente
    </option>

    <option value="Finalizado">
        Finalizado
    </option>

</select>

    <button onClick={handleAgregar}>
        Agregar Proyecto
    </button>

</div>
            <input
                type="text"
                placeholder="Buscar proyecto..."
                value={busqueda}
                onChange={handleBuscar}
            />

            <section className="grid-proyectos">
                {proyectos.map((p) => (
                  <ProyectoCard
                    key={p.id}
                    proyecto={p}
                    onEliminar={handleEliminar}
                    onVerDetalle={setProyectoSeleccionado}
                 />
                ))}
            </section>
            
            <DetalleProyecto proyecto={proyectoSeleccionado} />
        </div>
    );
};

export default ListaProyectos;