import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useState } from "react";
import api from "../../constants/api.js";


function Login () {

    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function ExecuteLogin () {  //async ele trabalha com awaite, esperando uma resposta do servidor.

        try {
            const response = await api.post("/admin/login", {   //post faz uma requisição para o servidos.
                email,
                password
        });

        if (response.data) {
            localStorage.setItem("sessionToken", response.data.token);   // localStorage é para salvar no cook do navegador as informações do usuario
            localStorage.setItem("sessionId", response.data.id_admin);
            localStorage.setItem("sessionEmail", response.data.email);
            localStorage.setItem("sessionName", response.data.name);
            api.defaults.headers.common['Authorization'] = "Bearer " + response.data.token;
            navigate("/home");  // jogar o usuario para atela, depois do login 
            // console.log(response.data); testar no navegador se esta pegando os dados do objeto
            
        } else {
            console.log(response);
        }
                
        } catch (error) {
            alert("Erro ao efetuar o Login, Tente mais tarde")
            console.log(error);
        }
   
    }
    
   return <div className="row">
    <div className="d-flex justify-content-center align-items-center text-center ">

        <form className="form-signin">
            <h5 className="mb-5">Gerenciamento de Rifas</h5>
            <h5 className="mb-4 text-secondary">Acesse sua conta</h5>

            <div className="mt-4">
                <input type="email" placeholder="E-mail"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="mt-2">
                <input type="password" placeholder="Senha"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="mt-3 mb-5">
              <button onClick={ExecuteLogin} className="btn btn-primary w-100" type="button">Login</button>
            </div>
            <Link to="/home">Criar uma conta</Link>
            <div>
                
            </div>
        </form>

    </div>
   </div>    
    
}

export default Login;