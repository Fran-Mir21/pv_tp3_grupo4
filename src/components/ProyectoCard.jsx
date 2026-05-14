const ProyectoCard = ({proyecto,onEliminar,onVerDetalle}) => {

    const {id,titulo,categoria,estado} = proyecto;

    return (
    <article className="card">

        <div className="card-content">

            <h3>
                {titulo}
            </h3>

            <p> 
                Categoría: {categoria} 
            </p>
            <span className={`badge ${
                estado === "Finalizado"
                    ? "done"
                    : "process"
            }`}>
                {estado}
            </span>

        </div>

        <div className="card-actions">

        <button className="btn-detail"onClick={() => onVerDetalle(proyecto)} >
            Ver Detalle
        </button>

        <button className="btn-delete"onClick={() => onEliminar(id)} >
            Eliminar
        </button>

        </div>

    </article>
);
};

export default ProyectoCard;