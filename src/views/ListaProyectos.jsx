import { useEffect, useMemo, useRef, useState } from "react";
import proyectoService from "../services/proyectoService";
import ProyectoCard from "../components/ProyectoCard";
import DetalleProyecto from "../components/DetalleProyecto";
import RegistroActividad from "../components/RegistroActividad";
import FormularioProyecto from "../components/FormularioProyecto";

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

    const handleEliminar = (id) => {
        proyectoService.eliminarProyecto(id);
        setProyectos(proyectoService.obtenerProyectos());
    };

    const handleBuscar = (e) => {
        const texto = e.target.value;
        setBusqueda(texto);
    };

    const handleAgregarProyecto = (nuevoProyecto) => {
        proyectoService.agregarProyecto(nuevoProyecto);
        setProyectos(proyectoService.obtenerProyectos());
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
            <FormularioProyecto onAgregarProyecto={handleAgregarProyecto} />
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