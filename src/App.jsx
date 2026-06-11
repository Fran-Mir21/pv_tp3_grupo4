import React from 'react';
import { UsuarioProvider } from './context/UsuarioContext'; // Importamos el proveedor que creamos recién
import Header from './components/header';
import PerfilUsuario from './views/PerfilUsuario';
// Importá acá el resto de tus vistas o componentes si los tenés (ej: Dashboard, ListaProyectos, etc.)

function App() {
  return (
    // 1. Envolvemos toda la aplicación con el Proveedor Global
    <UsuarioProvider>
      <div className="app-container">
        {/* 2. Tu Header actual (que en el Punto 2 haremos dinámico) */}
        <Header />
        
        <main>
          {/* 3. Tus vistas o Rutas. Al estar acá dentro, ya tienen acceso directo al contexto */}
          <PerfilUsuario />
        </main>
      </div>
    </UsuarioProvider>
  );
}

export default App;