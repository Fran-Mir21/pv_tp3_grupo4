import { useState } from "react";
import proyectoService from "../services/proyectoService";
import ProyectoCard from "./ProyectoCard";
import DetalleProyecto from "./DetalleProyecto";
const ListaProyectos = () => {

    // 🔹 Estado inicial (NO BORRAR)
    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos()
    );

    // 🔹 Estado del buscador
    const [busqueda, setBusqueda] = useState("");
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

    // 🔹 Eliminar proyecto
    const handleEliminar = (id) => {
        proyectoService.eliminarProyecto(id);
        setProyectos(proyectoService.obtenerProyectos());
    };

    // 🔹 Buscar proyecto
    const handleBuscar = (e) => {
        const texto = e.target.value;
        setBusqueda(texto);

        if (texto === "") {
            setProyectos(proyectoService.obtenerProyectos());
        } else {
            setProyectos(proyectoService.buscarProyecto(texto));
        }
    };

    return (
        <div className="container">
            <h2>Gestión de Proyectos Educativos</h2>

            {/* 🔍 BUSCADOR */}
            <input
                type="text"
                placeholder="Buscar proyecto..."
                value={busqueda}
                onChange={handleBuscar}
            />

            {/* 📦 LISTA */}
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