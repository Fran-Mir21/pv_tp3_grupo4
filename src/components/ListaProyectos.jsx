import { useEffect, useMemo, useRef, useState } from "react";
import proyectoService from "../services/proyectoService";
import ProyectoCard from "./ProyectoCard";
import DetalleProyecto from "./DetalleProyecto";
import RegistroActividad from "./RegistroActividad";
const ListaProyectos = () => {

    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos()
    );
    const [ultimaActualizacion, setUltimaActualizacion] = useState("");
    const primeraCarga = useRef(true);
    const [busqueda, setBusqueda] = useState("");

    const proyectosFiltrados = useMemo(() => {
        if (!busqueda) return proyectos;
        return proyectos.filter((p) =>
            p.titulo.toLowerCase().includes(busqueda.toLowerCase())
        );
    }, [proyectos, busqueda]);

    useEffect(() => {
        if (primeraCarga.current) {
            primeraCarga.current = false;
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
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [estado, setEstado] = useState("");
    const [descripcion, setDescripcion] =
        useState("");

    const [recursos, setRecursos] =
        useState("");

    const [equipo, setEquipo] =
        useState("");

    const handleEliminar = (id) => {
        proyectoService.eliminarProyecto(id);
        setProyectos(proyectoService.obtenerProyectos());
    };

    const handleBuscar = (e) => {
        const texto = e.target.value;
        setBusqueda(texto);
    };

    const handleAgregar = () => {

    const nuevoProyecto = {

        id: Date.now(),

        titulo,

        categoria,

        estado,

        descripcion,

        recursos:
            recursos.split(","),

        equipo: [

            {

                nombre:
                    equipo.split("-")[0],

                rol:
                    equipo.split("-")[1]

            }

        ]
    };

    proyectoService.agregarProyecto(nuevoProyecto);

    setProyectos(
        proyectoService.obtenerProyectos()
    );

    setTitulo("");
    setCategoria("");
    setEstado("");
    setDescripcion("");
    setRecursos("");
    setEquipo("");
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

    <option value="En proceso">
        En proceso
    </option>

    <option value="Pendiente">
        Pendiente
    </option>

    <option value="Finalizado">
        Finalizado
    </option>

</select>

    <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) =>
            setDescripcion(e.target.value)
        }
    />

    <input
        type="text"
        placeholder="Recursos separados por coma"
        value={recursos}
        onChange={(e) =>
            setRecursos(e.target.value)
        }
    />

    <input
        type="text"
        placeholder="Equipo (nombre-rol)"
        value={equipo}
        onChange={(e) =>
            setEquipo(e.target.value)
        }
    />

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
                {proyectosFiltrados.map((p) => (
                  <ProyectoCard
                    key={p.id}
                    proyecto={p}
                    onEliminar={handleEliminar}
                    onVerDetalle={setProyectoSeleccionado}
                 />
                ))}
            </section>

            {
    ultimaActualizacion && (
        <RegistroActividad fecha={ultimaActualizacion} />
    )
}
        </div>
    );
};

export default ListaProyectos;