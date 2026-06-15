import { useContext } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';

const Header = () => {
  const { usuario } = useContext(UsuarioContext);

  return (
    <header style={{ backgroundColor: "#2c3e50", color: "white" }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 15px' }}>
        <h1 style={{ margin: 0, fontSize: "1.8rem", fontWeight: 600 }}>
          Gestión de Proyectos Educativos
        </h1>
        <div style={{ textAlign: 'right' }}>
          <p style={{ margin: 0, fontSize: "1rem", fontWeight: 600 }}>
            {usuario.nombre}
          </p>
          <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.9 }}>
            Rol: {usuario.rol}
          </p>
        </div>
      </div>
    </header>
  );
};
export default Header;