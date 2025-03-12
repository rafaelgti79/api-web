import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";


function Navbar() {

    const navigate = useNavigate();

    function Logout(){
                localStorage.removeItem("sessionToken");  
                localStorage.removeItem("sessionId");
                localStorage.removeItem("sessionEmail");
                localStorage.removeItem("sessionName");
                
                navigate("/");
                api.defaults.common['Authorization'] = "";

    }

    return <nav className="navbar fixed-top navbar-expand-lg bg-primary" data-bs-theme="dark">
    
    <div className="container-fluid">
    <Link className="navbar-brand" to="/home"></Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"> 
            <Link className="nav-link active" to="/campanha">Campanhas</Link>
        </li>
        <li className="nav-item"> 
            <Link className="nav-link active" to="/usuarios">Usuarios</Link>
        </li>
        <li className="nav-item"> 
            <Link className="nav-link active" to="/rotas">Rotas</Link>
        </li>
        </ul>

    <ul className="navbar-nav">
        <li className="nav-item">
            <div className="bnt-group">
        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {localStorage.getItem("sessionName")}
        </button>
            <ul className="dropdown-menu dropdown-menu-end">
                <li><Link className="dropdown-item" href="#">Meu Perfil</Link></li>
                <li><hr className="dropdown-dividir" /></li>
                <li><button className="dropdown-item" onClick={Logout}>Desconectar</button></li>
            </ul>
    </div>
    </li>
    </ul>

    </div>

    </div>

   </nav>
}

export default Navbar;