import { useState } from "react";
import proyectoService from "../services/proyectoService";
import DetalleProyecto from "./DetalleProyecto";
import ProyectoCard from "./ProyectoCard";

const ListaProyectos = () => {

    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos()
    );

    const [busqueda, setBusqueda] = useState("");

    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [estado, setEstado] = useState("En proceso");
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

    const handleAgregar = () => {

        if (
            titulo.trim() === "" ||
            categoria.trim() === ""
        ) {
            return;
        }

        const nuevoProyecto = {
            id: Date.now(),
            titulo,
            categoria,
            estado
        };

        proyectoService.agregarProyecto(
            nuevoProyecto
        );

        setProyectos(
            proyectoService.obtenerProyectos()
        );

        setTitulo("");
        setCategoria("");
        setEstado("En proceso");
    };

    const handleEliminar = (id) => {

        proyectoService.eliminarProyecto(id);

        setProyectos(
            proyectoService.obtenerProyectos()
        );
    };

    const handleBuscar = (e) => {

        const texto = e.target.value;

        setBusqueda(texto);

        if (texto === "") {

            setProyectos(
                proyectoService.obtenerProyectos()
            );

        } else {

            setProyectos(
                proyectoService.buscarProyecto(texto)
            );
        }
    };

    return (

        <div className="container">

            <h2>
                Gestión de Proyectos Educativos
            </h2>

            <div className="formulario">

                <input
                    type="text"
                    placeholder="Título del proyecto"
                    value={titulo}
                    onChange={(e) =>
                        setTitulo(e.target.value)
                    }
                />

                <select
                    value={categoria}
                    onChange={(e) =>
                        setCategoria(e.target.value)
                    }
                >
                    <option value="">
                        Seleccionar categoría
                    </option>

                    <option value="Web">
                        Web
                    </option>

                    <option value="Mobile">
                        Mobile
                    </option>

                    <option value="Escritorio">
                        Escritorio
                    </option>

                </select>

                <select
                    value={estado}
                    onChange={(e) =>
                        setEstado(e.target.value)
                    }
                >
                    <option value="En proceso">
                        En proceso
                    </option>

                    <option value="Finalizado">
                        Finalizado
                    </option>

                </select>

                <button
                    className="btn-add"
                    onClick={handleAgregar}
                >
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
            {
    proyectoSeleccionado && (

        <DetalleProyecto
            proyecto={proyectoSeleccionado}
        />

    )
}

        </div>
    );
};

export default ListaProyectos;