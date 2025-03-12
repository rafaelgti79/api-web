import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/login/login.jsx";
import Home from "./pages/home/home.jsx";
import Campanha from "./pages/campanha/campanha.jsx";
import Usuario from "./pages/usuario/usuario.jsx";
import Pontos from "./pages/pontos/pontos.jsx";

function Rotas () {
        return <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/campanha" element={<Campanha />} />
                <Route path="/usuarios" element={<Usuario />} />
                <Route path="/rotas" element={<Pontos />} />
            </Routes>
        </BrowserRouter>
               
}

export default Rotas;
                
                