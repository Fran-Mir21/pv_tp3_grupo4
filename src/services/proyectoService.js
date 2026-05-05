let proyectos = [
    {
        id: 1,
        titulo: "Plataforma E-learning",
        categoria: "Web",
        estado: "En proceso"
    },
    {
        id: 2,
        titulo: "App de Matemática",
        categoria: "Mobile",
        estado: "Finalizado"
    },
    {
        id: 3,
        titulo: "Juego Educativo",
        categoria: "Web",
        estado: "En proceso"
    }
];

const obtenerProyectos = () => {
    return proyectos;
};

const eliminarProyecto = (id) => {
    proyectos = proyectos.filter(p => p.id !== id);
};

const buscarProyecto = (texto) => {
    return proyectos.filter(p =>
        p.titulo.toLowerCase().includes(texto.toLowerCase())
    );
};

export default {
    obtenerProyectos,
    eliminarProyecto,
    buscarProyecto
};