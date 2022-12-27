import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Administrador from "./pages/administrador";
import Usuarios from "./pages/usuarios";
import Productos from "./pages/productos";

function App() {
  return (
      <Routes>
        <Route path="/administrador" element={<Administrador/>}/>
        <Route path="/administrador/usuario" element={<Usuarios/>}/>
        <Route path="/administrador/producto" element={<Productos/>}/>
      </Routes>
  );
}

export default App;
