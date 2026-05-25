import { useState } from "react";

const FormularioProyecto = ({ onAgregarProyecto }) => {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [estado, setEstado] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [recursos, setRecursos] = useState("");
  const [equipo, setEquipo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoProyecto = {
      id: Date.now(),
      titulo,
      categoria,
      estado,
      descripcion,
      recursos: recursos.split(","),
      equipo: [
        {
          nombre: equipo.split("-")[0] || "",
          rol: equipo.split("-")[1] || ""
        }
      ]
    };

    onAgregarProyecto(nuevoProyecto);

    setTitulo("");
    setCategoria("");
    setEstado("");
    setDescripcion("");
    setRecursos("");
    setEquipo("");
  };

  return (
    <form className="form-agregar" onSubmit={handleSubmit}>
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

      <select value={estado} onChange={(e) => setEstado(e.target.value)}>
        <option value="">Seleccionar estado</option>
        <option value="En proceso">En proceso</option>
        <option value="Pendiente">Pendiente</option>
        <option value="Finalizado">Finalizado</option>
      </select>

      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />

      <input
        type="text"
        placeholder="Recursos separados por coma"
        value={recursos}
        onChange={(e) => setRecursos(e.target.value)}
      />

      <input
        type="text"
        placeholder="Equipo (nombre-rol)"
        value={equipo}
        onChange={(e) => setEquipo(e.target.value)}
      />

      <button type="submit">Agregar Proyecto</button>
    </form>
  );
};

export default FormularioProyecto;
