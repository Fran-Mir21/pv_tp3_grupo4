import proyectoService from "../services/proyecto.services";
import { useState } from "react";

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());

    const handleEliminar = (id) => {
        proyectoService.eliminarProyecto(id);
        setProyectos(proyectoService.obtenerProyectos());
    }
    return (
        <div className = "container">
            <h2>Gestión de Proyectos Educativos</h2>

            <section className = "grid-proyectos">
                <div>
                    {proyectos.map(p => (
                        <article key={p.id} className="card">
                            <div className="card-content">
                                <h3>{p.titulo}</h3>
                                <span className={`badge ${p.estado === 'Finalizado' ? 'done' : 'process'}`}>
                                    {p.estado}
                                </span>
                            </div>
                            <button className="btn-delete" onClick={() => handleEliminar(p.id)}>Eliminar</button>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}