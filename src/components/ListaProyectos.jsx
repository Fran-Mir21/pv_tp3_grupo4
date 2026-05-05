import { useState } from "react";
import proyectoService from "../services/proyectoService";

const ListaProyectos = () => {

    // 🔹 Estado inicial (NO BORRAR)
    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos()
    );

    // 🔹 Estado del buscador
    const [busqueda, setBusqueda] = useState("");

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
                    <article key={p.id} className="card">
                        <div className="card-content">
                            <h3>{p.titulo}</h3>

                            <p>Categoría: {p.categoria}</p>

                            <span
                                className={`badge ${
                                    p.estado === "Finalizado"
                                        ? "done"
                                        : "process"
                                }`}
                            >
                                {p.estado}
                            </span>
                        </div>

                        <button
                            className="btn-delete"
                            onClick={() => handleEliminar(p.id)}
                        >
                            Eliminar
                        </button>
                    </article>
                ))}
            </section>
        </div>
    );
};

export default ListaProyectos;