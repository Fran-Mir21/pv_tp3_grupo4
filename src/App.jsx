import React from "react";
import { Routes, Route } from "react-router-dom";

import { UsuarioProvider } from "./context/UsuarioContext";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Dashboard from "./views/Dashboard";
import ListaProyectos from "./views/ListaProyectos";
import DetalleProyecto from "./views/DetalleProyecto";
import PerfilUsuario from "./views/PerfilUsuario";

import "./css/styles.css";
import "./css/listaProyectos.css";

function App() {
  return (
    <UsuarioProvider>
      <div
        className="app-container"
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header />

        <Nav />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/proyectos" element={<ListaProyectos />} />
            <Route path="/proyectos/:id" element={<DetalleProyecto />} />
            <Route path="/perfil" element={<PerfilUsuario />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </UsuarioProvider>
  );
}

export default App;