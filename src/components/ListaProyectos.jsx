import { useState } from "react";
import proyectoService from "../services/proyectoService";

const ListaProyectos = () => {

    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos()
    );

    const [busqueda, setBusqueda] = useState("");

    const handleEliminar = (id) => {
        proyectoService.eliminarProyecto(id);
        setProyectos(proyectoService.obtenerProyectos());
    };

    // Buscar
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

            {/* FORMULARIO */}
            <div className="formulario">

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

                <input
                    type="text"
                    placeholder="Estado"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                />

                <button onClick={handleAgregar}>
                    Agregar Proyecto
                </button>

            </div>

            {/* BUSCADOR */}
=======
            <input
                type="text"
                placeholder="Buscar proyecto..."
                value={busqueda}
                onChange={handleBuscar}
            />

            {/* LISTA */}
=======
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