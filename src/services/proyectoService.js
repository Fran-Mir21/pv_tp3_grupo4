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
    },
    {
        id: 4,
        titulo: "Sistema Escolar",
        categoria: "Web",
        estado: "Pendiente"    
    },
    {
        id: 5,
        titulo: "App de Ciencias",
        categoria: "Mobile",
        estado: "En proceso"
    }
];

const obtenerProyectos = () => {
    return [...proyectos];
};

const agregarProyecto = (nuevo) => {
    proyectos.push(nuevo);
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
    agregarProyecto,
    eliminarProyecto,
    buscarProyecto
};