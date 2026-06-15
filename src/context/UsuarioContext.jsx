import React, { createContext, useState, useEffect } from 'react';

// 1. Creamos el contexto global
export const UsuarioContext = createContext();

// Definimos los datos iniciales por defecto (Simulación de usuario logueado)
const usuarioInicial = {
  nombre: "Eugenia Arias", // Pusimos uno de los nombres del grupo por defecto
  dni: 42123456,
  rol: "Alumno",         // La consigna pide "Docente" o "Alumno"
  institucion: "FI UNJu"  // Facultad de Ingeniería - UNJu
};

// 2. Creamos el Proveedor del contexto (Provider)
export const UsuarioProvider = ({ children }) => {
  // Estado centralizado que guardará al usuario actual
  // Inicializa desde localStorage si existe, sino usa usuarioInicial
  const [usuario, setUsuario] = useState(() => {
    const usuarioGuardado = localStorage.getItem('usuario');
    return usuarioGuardado ? JSON.parse(usuarioGuardado) : usuarioInicial;
  });

  // useEffect que guarda automáticamente los cambios en localStorage
  useEffect(() => {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }, [usuario]);

  // Función global que permitirá a la vista de perfil editar estos datos
  const actualizarPerfil = (nuevosDatos) => {
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      ...nuevosDatos // Sobrescribe o añade los campos modificados
    }));
  };

  return (
    // Compartimos el usuario y la función de actualización a todo el árbol de componentes
    <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
      {children}
    </UsuarioContext.Provider>
  );
};