const DetalleProyecto = ({proyecto}) => {
if (!proyecto) {
   return null;
}
    const {titulo,categoria,estado,descripcion,recursos,equipo} = proyecto;

    return (

        <section className="detalle">

            <h2>
                {titulo}
            </h2>

            <p>
                {descripcion}
            </p>

            <p>
                Este proyecto educativo busca mejorar la experiencia de los
                estudiantes mediante herramientas digitales y recursos interactivos.
            </p>

            <p>
                Categoría: {categoria}
            </p>

            <p>
                Estado: {estado}
            </p>

            <h3>
                Recursos
            </h3>

            <ul>

                {recursos?.map((r, index) => (

                    <li key={index}>
                        {r}
                    </li>

                ))}

            </ul>

            <h3>
                Equipo
            </h3>

            <ul>

                {equipo?.map((persona, index) => (

    <li key={index}>

        {persona.nombre}
        {" - "}
        {persona.rol}

    </li>

))}

            </ul>

        </section>

    );
};

export default DetalleProyecto;