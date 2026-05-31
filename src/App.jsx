import Header from "./components/Header";
import Nav from "./components/Nav";
import ListaProyectos from "./components/ListaProyectos";
import Footer from "./components/Footer";
import "./css/listaProyectos.css";
import "./css/styles.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <main>
       <Routes>
          <Route path="/proyectos" element={<ListaProyectos />} />
       </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;