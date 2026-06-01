let proyectos = [
    {
        id: 1,

        titulo: "Plataforma E-learning",

        categoria: "Web",

        estado: "En proceso",

        descripcion:
            "Plataforma educativa para cursos virtuales y gestión de alumnos. Permite compartir materiales y realizar actividades online.",

        recursos: [
            "PDF",
            "Drive",
            "GitHub"
        ],

        equipo: [
            {
                nombre: "Francisco",
                rol: "Frontend"
            },
            {
                nombre: "Gonzalo",
                rol: "Backend"
            }
        ]
    },

    {
        id: 2,

        titulo: "App de Matemática",

        categoria: "Mobile",

        estado: "Finalizado",

        descripcion:
            "Aplicación móvil para resolver ejercicios matemáticos interactivos y mejorar el aprendizaje de estudiantes.",

        recursos: [
            "PDF",
            "Drive",
            "GitHub"
        ],

        equipo: [
            {
                nombre: "Eugenia",
                rol: "Diseño UI"
            }
        ]
    },

    {
        id: 3,

        titulo: "Juego Educativo",

        categoria: "Web",

        estado: "En proceso",

        descripcion:
            "Juego interactivo educativo pensado para niños y adolescentes con actividades dinámicas y desafíos.",

        recursos: [
            "PDF",
            "Drive",
            "GitHub"
        ],

        equipo: [
            {
                nombre: "Natalia",
                rol: "Game Design"
            }
        ]
    },

    {
        id: 4,

        titulo: "Sistema Escolar",

        categoria: "Web",

        estado: "Pendiente",

        descripcion:
            "Sistema de administración escolar para gestionar estudiantes, materias, horarios y asistencia.",

        recursos: [
            "PDF",
            "Drive",
            "GitHub"
        ],

        equipo: [
            {
                nombre: "Francisco",
                rol: "Base de Datos"
            }
        ]
    },

    {
        id: 5,

        titulo: "App de Ciencias",

        categoria: "Mobile",

        estado: "En proceso",

        descripcion:
            "Aplicación educativa enfocada en contenidos científicos, experimentos y aprendizaje interactivo.",

        recursos: [
            "PDF",
            "Drive",
            "GitHub"
        ],

        equipo: [
            {
                nombre: "Gonzalo",
                rol: "Mobile Developer"
            }
        ]
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
const obtenerProyectoPorId = (id) => {
    return proyectos.find(
        p => p.id === Number(id)
    );
};

export default {
    obtenerProyectos,
    agregarProyecto,
    eliminarProyecto,
    buscarProyecto,
    obtenerProyectoPorId
};